import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { frameStyles } from "@dldc/ui-styles/frame";
import { frameContentStyles } from "@dldc/ui-styles/frame-content";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";
import { designPropsSplitter, SizeContextProvider, TDesignProps, useFrameDesignProps } from "../design-context";
import { frameContentPropsSplitter, TFrameContentProps, useFrameContent } from "../frame-content/index";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type FrameSpecificProps = TFrameContentProps &
  TDesignProps & {
    /**
     * This props only impact styling but is never forwarded to the underlying element.
     * Use `render={<button disabled={true} />}` to pass native props to the underlying element.
     */
    disabled?: boolean;

    color?: TPaletteColor;
    highlightColor?: TPaletteColor;
    highlighted?: boolean;

    /**
     * Defines the variant used as the base for this Frame.
     * For example, Input components use the "input" variant by default.
     */
    baseVariant?: TDesignVariant;

    interactive?: boolean;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type FrameProps = ComponentPropsBaseWith<"div", FrameSpecificProps>;

export function Frame(inProps: FrameProps) {
  const [{ localDesign, localFrameContent }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
    localFrameContent: frameContentPropsSplitter,
  });

  const {
    color,
    highlightColor = "red",
    highlighted = false,

    baseVariant = "surface",
    interactive = false,

    children,
    disabled = false,
    style,
    className,
    ref,
    render,

    ...htmlProps
  } = props;

  const isDisabledAndInteractive = disabled && interactive;

  const { hoverVariant, variant, height, contentHeight, spacing, rounded, depth } = useFrameDesignProps(
    localDesign,
    baseVariant,
  );

  const { startPadding, endPadding, fragment, noLayout } = useFrameContent(localFrameContent, children);

  const [baseClass, baseInline] = frameStyles({
    height,
    contentHeight,
    rounded,
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });

  const [contentClass, contentInline] = frameContentStyles(contentHeight, spacing, startPadding, endPadding, noLayout);

  // Merge base props into the custom render element
  return mergeRender(
    render,
    <div
      className={clsx(baseClass, contentClass, className)}
      style={{ ...baseInline, ...contentInline, ...style }}
      aria-disabled={isDisabledAndInteractive}
      ref={ref}
      {...htmlProps}
    >
      <SizeContextProvider height={height} contentHeight={contentHeight} rounded={rounded} depth={depth}>
        {fragment}
      </SizeContextProvider>
    </div>,
  );
}

Frame.displayName = "Frame";
