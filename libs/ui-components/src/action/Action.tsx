import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { actionStyles } from "@dldc/ui-styles/action";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content/index";
import { designPropsSplitter, SizeContextProvider, TDesignProps, useFrameDesignProps } from "../design-context";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TDesignVariantProps, useVariant, variantPropsSplitter } from "../variant";

export type ActionSpecificProps = TActionContentProps &
  TDesignProps &
  TDesignVariantProps & {
    /**
     * This props only impact styling but is never forwarded to the underlying element.
     * Use `render={<button disabled={true} />}` to pass native props to the underlying element.
     */
    disabled?: boolean;

    color?: TPaletteColor;
    highlightColor?: TPaletteColor;
    highlighted?: boolean;

    /**
     * Defines the variant used as the base for this Action.
     * For example, Input components use the "input" variant by default.
     */
    baseVariant?: TDesignVariant;

    interactive?: boolean;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ActionProps = ComponentPropsBaseWith<"div", ActionSpecificProps>;

export function Action(inProps: ActionProps) {
  const [{ localDesign, localActionContent, localDesignVariant }, props] = pipePropsSplitters(inProps, {
    localDesignVariant: variantPropsSplitter,
    localDesign: designPropsSplitter,
    localActionContent: actionContentPropsSplitter,
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

  const { hoverVariant, variant } = useVariant(localDesignVariant, baseVariant);
  const { height, contentHeight, spacing, rounded, depth } = useFrameDesignProps(localDesign);
  const { startPadding, endPadding, fragment, noLayout } = useActionContent(localActionContent, children);

  const [baseClass, baseInline] = actionStyles({
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

  const [contentClass, contentInline] = actionContentStyles(contentHeight, spacing, startPadding, endPadding, noLayout);

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

Action.displayName = "Action";
