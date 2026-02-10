import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { selectItemStyles } from "@dldc/ui-styles/select";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { clsx } from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content";
import { designPropsSplitter, SizeContextProvider, TDesignProps, useFrameDesignProps } from "../design-context";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type SelectItemSpecificProps = TActionContentProps &
  TDesignProps & {
    disabled?: boolean;
    color?: TPaletteColor;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-active-item"?: boolean;
  };

export type SelectItemProps = ComponentPropsBaseWith<"div", SelectItemSpecificProps>;

export function SelectItem(inProps: SelectItemProps) {
  const [{ localDesign, localActionContent }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
    localActionContent: actionContentPropsSplitter,
  });

  const {
    color,

    children,
    disabled = false,
    style,
    className,
    ref,
    render,

    ...htmlProps
  } = props;

  const { height, contentHeight, spacing, depth } = useFrameDesignProps(localDesign);

  const {
    startPaddingMode: startPadding,
    endPaddingMode: endPadding,
    fragment,
    noLayout,
  } = useActionContent(localActionContent, children);

  const [baseClass, baseInline] = selectItemStyles({ height, contentHeight, color, disabled });

  const [contentClass, contentInline] = actionContentStyles(contentHeight, spacing, startPadding, endPadding, noLayout);

  return mergeRender(
    render,
    <div
      className={clsx(baseClass, contentClass, className)}
      style={{ ...baseInline, ...contentInline, ...style }}
      ref={ref}
      {...htmlProps}
    >
      <SizeContextProvider height={height} contentHeight={contentHeight} depth={depth}>
        {fragment}
      </SizeContextProvider>
    </div>,
  );
}
SelectItem.displayName = "SelectItem";
