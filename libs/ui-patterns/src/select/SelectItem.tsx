import * as Ariakit from "@ariakit/react";
import { DefaultDesignProvider, designPropsSplitter, useFrameDesignProps } from "@dldc/ui-components/design-context";
import { useFrameContent } from "@dldc/ui-components/frame-content";
import { heightStyles } from "@dldc/ui-styles/common";
import { frameContentStyles } from "@dldc/ui-styles/frame-content";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { TSelectItem } from "./types";

interface SelectItemProps extends Ariakit.SelectItemProps {
  item: TSelectItem<string>;
}

export function SelectItem(inProps: SelectItemProps) {
  const [{ localDesign }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
  });

  const { item, className, style, ...htmlProps } = props;

  const store = Ariakit.useSelectContext();
  if (!store) {
    throw new Error("SelectItem must be used within a SelectProvider");
  }
  const checked = Ariakit.useStoreState(store, (state) => state.value === item.value);

  const { startPadding, endPadding, fragment, noLayout } = useFrameContent(
    {
      endIcon: checked ? <Ariakit.SelectItemCheck render={<CheckIcon children={null} />} /> : item.endIcon,
      startIcon: item.icon,
    },
    item.content,
  );

  const { height, contentHeight, spacing } = useFrameDesignProps(localDesign, "subtle");
  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = frameContentStyles(contentHeight, spacing, startPadding, endPadding, noLayout);

  return (
    <Ariakit.SelectItem
      {...htmlProps}
      className={clsx(
        heightClass,
        // selectItemClass,
        contentClass,
        // item.hidden && { display: "none" },
        className,
      )}
      style={{ ...style, ...heightInline, ...contentInline }}
      disabled={item.disabled || item.hidden}
      value={item.value}
    >
      <DefaultDesignProvider {...localDesign}>{fragment}</DefaultDesignProvider>
    </Ariakit.SelectItem>
  );
}

SelectItem.displayName = "SelectItem";
