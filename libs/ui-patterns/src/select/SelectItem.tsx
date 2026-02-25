import * as Ariakit from "@ariakit/react";
import { useActionContent } from "@dldc/ui-components/action-content";
import { DefaultDesignProvider, designPropsSplitter, useFrameDesignProps } from "@dldc/ui-components/design-context";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { heightStyles } from "@dldc/ui-styles/common";
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

  const { startPaddingMode, endPaddingMode, fragment, noLayout } = useActionContent(
    {
      endIcon: checked ? <Ariakit.SelectItemCheck render={<CheckIcon children={null} />} /> : item.endIcon,
      startIcon: item.icon,
    },
    item.content,
  );

  const { height, contentHeight, spacing } = useFrameDesignProps(localDesign);
  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = actionContentStyles({
    contentHeight,
    spacing,
    startPaddingMode,
    endPaddingMode,
    noLayout,
  });

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
