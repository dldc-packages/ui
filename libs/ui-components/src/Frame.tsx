import { frameStyles } from "@dldc/ui-styles/frame";
import { frameContentStyles } from "@dldc/ui-styles/frame-content";
import clsx from "clsx";
import { cloneElement, ElementType, ReactElement, Ref } from "react";
import { TPaletteColor } from "../../ui-core/dist/colors/index.js";
import { TDesignVariant } from "../../ui-core/dist/variants/index.js";
import {
  designPropsSplitter,
  SizeContextProvider,
  TDesignProps,
  useContainerDesignProps,
} from "./DesignContext/index.js";
import { frameContentPropsSplitter, TFrameContentProps, useFrameContent } from "./FrameContent/index.js";
import { pipePropsSplitters } from "./utils/propsSplitters.js";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

export type FrameProps = ComponentPropsBaseWith<
  ElementType,
  TFrameContentProps &
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
    }
>;

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

  const { hoverVariant, variant, height, contentHeight, spacing, rounded, depth } = useContainerDesignProps(
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

  const base = (
    <div
      className={clsx(baseClass, contentClass, className)}
      style={{ ...baseInline, ...contentInline, ...style }}
      aria-disabled={isDisabledAndInteractive}
      ref={ref as Ref<HTMLDivElement>}
      {...htmlProps}
    >
      <SizeContextProvider height={height} contentHeight={contentHeight} rounded={rounded} depth={depth}>
        {fragment}
      </SizeContextProvider>
    </div>
  );

  if (!render) {
    return base;
  }

  // Merge base props into the custom render element
  return cloneElement(render, render.props);
}

Frame.displayName = "Frame";
