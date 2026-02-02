import { ReactElement } from "react";
import { frameContentPropsSplitter, TFrameContentProps, useFrameContent } from "../frame-content";
import { designPropsSplitter, SizeContextProvider, TDesignProps, useFrameDesignProps } from "../design-context";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { frameContentStyles } from "@dldc/ui-styles/frame-content";
import { selectItemStyles } from "@dldc/ui-styles/select";
import { mergeRender } from "../utils/mergeRender";
import { clsx } from "clsx";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type SelectItemSpecificProps = TFrameContentProps &
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
  const [{ localDesign, localFrameContent }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
    localFrameContent: frameContentPropsSplitter,
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

  const { hoverVariant, variant, height, contentHeight, spacing, rounded, depth } = useFrameDesignProps(
    localDesign,
    "ghost",
  );

  const { startPadding, endPadding, fragment, noLayout } = useFrameContent(localFrameContent, children);

  const [baseClass, baseInline] = selectItemStyles({
    height,
    contentHeight,
    rounded,
    variant,
    color,
    hoverVariant,
    disabled,
  });

  const [contentClass, contentInline] = frameContentStyles(contentHeight, spacing, startPadding, endPadding, noLayout);

  return mergeRender(
    render,
    <div
      className={clsx(baseClass, contentClass, className)}
      style={{ ...baseInline, ...contentInline, ...style }}
      ref={ref}
      {...htmlProps}
    >
      <SizeContextProvider height={height} contentHeight={contentHeight} rounded={rounded} depth={depth}>
        {fragment}
      </SizeContextProvider>
    </div>,
  );
}
SelectItem.displayName = "SelectItem";
