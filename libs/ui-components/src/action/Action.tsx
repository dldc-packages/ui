import { TPaletteColor } from "@dldc/ui-core/colors";
import { parseSize } from "@dldc/ui-core/size";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { actionStyles } from "@dldc/ui-styles/action";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { geometryStyles } from "@dldc/ui-styles/geometry";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content/index";
import { designPropsSplitter, SizeContextProvider, TDesignProps, useFrameDesignProps } from "../design-context";
import { geometryPropsSplitter, ParentGeometryContextProvider, TGeometryProps, useGeometry } from "../geometry";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TDesignVariantProps, useVariant, variantPropsSplitter } from "../variant";

export type ActionSpecificProps = TActionContentProps &
  TGeometryProps &
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
  const [{ localDesign, localGeometry, localActionContent, localDesignVariant }, props] = pipePropsSplitters(inProps, {
    localDesignVariant: variantPropsSplitter,
    localGeometry: geometryPropsSplitter,
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

  const { rounded, padding } = useGeometry(localGeometry, {
    minRounded: parseSize("0x"),
    defaultRounded: parseSize("1"),
  });
  const { hoverVariant, variant } = useVariant(localDesignVariant, baseVariant);
  const { height, contentHeight, spacing, depth } = useFrameDesignProps(localDesign);
  const { startPaddingMode, endPaddingMode, fragment, noLayout } = useActionContent(localActionContent, children);

  const [baseClass, baseInline] = actionStyles({
    height,
    contentHeight,
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });
  const [geometryClass, geometryInline] = geometryStyles(rounded, padding);
  const [contentClass, contentInline] = actionContentStyles(
    contentHeight,
    spacing,
    startPaddingMode,
    endPaddingMode,
    noLayout,
  );

  // Merge base props into the custom render element
  return mergeRender(
    render,
    <div
      className={clsx(baseClass, geometryClass, contentClass, className)}
      style={{ ...baseInline, ...geometryInline, ...contentInline, ...style }}
      aria-disabled={isDisabledAndInteractive}
      ref={ref}
      {...htmlProps}
    >
      <ParentGeometryContextProvider rounded={rounded} padding={padding}>
        <SizeContextProvider height={height} contentHeight={contentHeight} depth={depth}>
          {fragment}
        </SizeContextProvider>
      </ParentGeometryContextProvider>
    </div>,
  );
}

Action.displayName = "Action";
