import * as Ariakit from "@ariakit/react";
import { Button } from "@dldc/ui-ariakit/button";
import { DefaultDesignProvider, designPropsSplitter } from "@dldc/ui-components/design-context";
import { FrameContentFragment } from "@dldc/ui-components/frame-content";
import { Label } from "@dldc/ui-components/label";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignSize } from "@dldc/ui-core/size";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { CaretDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { ComponentPropsWithRef, Ref, useMemo } from "react";
import { Merge } from "type-fest";
import { SelectItem } from "./SelectItem";
import { listWrappertClass } from "./styles.css";
import { TSelectItem } from "./types";

// import { colorPaletteClass } from "../../design/colors";
// import { TDesignHeight, TDesignSpacing, TDesignVariant, TPaletteColor } from "../../design/types";
// import { pipePropsSplitters } from "../../utils/propsSplitters";
// import { Button } from "../button/Button";
// import { DefaultDesignProvider, designPropsSplitter } from "../core/DesignContext";
// import { Label } from "../form/Label";
// import { FrameContentFragment } from "../frame/FrameContentFragment";

export type SelectProps<Value extends string> = Merge<
  ComponentPropsWithRef<"button">,
  {
    // Design
    disabled?: boolean;
    height?: TDesignSize;
    heightRatio?: number;
    spacing?: TDesignSize;
    variant?: TDesignVariant;
    hoverVariant?: TDesignVariant;

    color?: TPaletteColor;

    caret?: boolean;
    className?: string;
    defaultValue?: Value;
    items: TSelectItem<Value>[];
    label: React.ReactNode;
    name?: string;
    labelHidden?: boolean;
    onChange?: (value: Value) => void;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    issues?: React.ReactNode;
    value?: Value;
    emptyValue?: Value;
    sameWidth?: boolean;

    renderSelected?: (item: TSelectItem<Value>) => React.ReactNode;

    renderSelect?: React.ReactElement<any>;
    renderLabel?: React.ReactElement<any>;
    renderWrapper?: React.ReactElement<any>;
  }
>;

export function Select<Value extends string>(inProps: SelectProps<Value>) {
  const [{ localDesign }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
  });

  const {
    color: _color,
    disabled = false,

    items,
    label,
    name,
    labelHidden = false,
    onChange,
    open,
    setOpen,
    issues,
    value,
    caret = true,
    defaultValue,
    emptyValue,
    sameWidth = false,
    className,
    renderSelected,
    renderSelect,
    renderLabel,
    renderWrapper,
    ref,
    ...htmlProps
  } = props;

  const selectStore = Ariakit.useSelectStore({ value, defaultValue, setValue: onChange, open, setOpen });

  const storeValue = Ariakit.useStoreState(selectStore, (s) => s.value);

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const selectedItem = useMemo(() => items.find((item) => item.value === storeValue), [items, storeValue]);
  if (!selectedItem) {
    console.warn(`Select: value "${storeValue}" not found in items`);
  }

  const selectedIsEmpty = emptyValue !== undefined && storeValue === emptyValue;

  return (
    <DefaultDesignProvider {...localDesign}>
      <Ariakit.SelectProvider store={selectStore}>
        <Ariakit.Role
          ref={ref as Ref<HTMLDivElement>}
          render={
            renderWrapper ?? (
              <div
                className={clsx(listWrappertClass, className)}
                // className={cx(
                //   css(vstack.raw({ alignItems: "start", gap: "0" }), color && colorPaletteClass[color], cssProps),
                //   className,
                // )}
              />
            )
          }
        >
          <Ariakit.SelectLabel
            render={labelHidden ? <Ariakit.VisuallyHidden /> : (renderLabel ?? <Label disabled={disabled} />)}
          >
            {label}
          </Ariakit.SelectLabel>
          <Ariakit.Select
            disabled={disabled}
            name={name}
            {...htmlProps}
            render={
              renderSelect ?? (
                <Button endPadding="icon" startPadding={selectedItem && selectedItem.icon ? "icon" : "text"} />
              )
            }
          >
            {selectedItem ? (
              renderSelected ? (
                renderSelected(selectedItem)
              ) : (
                <FrameContentFragment
                  endIcon={caret && <Ariakit.SelectArrow render={<CaretDownIcon children={null} />} />}
                  startIcon={selectedItem.icon}
                >
                  {selectedIsEmpty ? <span className="opacity-50">{selectedItem.content}</span> : selectedItem.content}
                </FrameContentFragment>
              )
            ) : null}
          </Ariakit.Select>
          {issues}
        </Ariakit.Role>
        <Ariakit.SelectPopover
          gutter={4}
          portal
          render={
            <div className="bg-neutral-800 rounded-[0.5rem] border-0.5 border-white/10 shadow-md outline-none w-[min-content]" />
          }
          sameWidth={sameWidth}
          unmountOnHide
        >
          <div className="p-2 min-w-[var(--popover-anchor-width)] max-w-[var(--popover-available-width)] max-h-[var(--popover-available-height)] overflow-y-auto">
            {items.map((item) => (
              <SelectItem
                item={item}
                key={item.value}
                // nestedHeight={contentHeight}
              />
            ))}
          </div>
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </DefaultDesignProvider>
  );
}

Select.displayName = "Select";
