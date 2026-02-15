import { TPaletteColor } from "@dldc/ui-core/colors";
import { parseSize, TDesignSpacing } from "@dldc/ui-core/size";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { actionStyles } from "@dldc/ui-styles/action";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { geometryStyles } from "@dldc/ui-styles/geometry";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content/index";
import {
  geometryPropsSplitter,
  ParentGeometryContextProvider,
  TGeometryProps,
  TUseGeometryOptions,
  useGeometry,
  useGeometryProps,
} from "../geometry";
import { sizePropsSplitter, TSizeProps, useSize, useSizeProps } from "../size";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TDesignVariantProps, useVariant, variantPropsSplitter } from "../variant";
import { useActionGeometrySize } from "./useActionGeometrySize";

export type ActionSpecificProps = TActionContentProps &
  TGeometryProps &
  TSizeProps &
  TDesignVariantProps & {
    /**
     * This props only impact styling but is never forwarded to the underlying element.
     * Use `render={<button disabled={true} />}` to pass native props to the underlying element.
     */
    disabled?: boolean;

    spacing?: TDesignSpacing | null;
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

const GEOMETRY_OPTIONS: TUseGeometryOptions = {
  minRounded: parseSize("0x"),
  defaultRounded: parseSize("1"),
};

export function Action(inProps: ActionProps) {
  const [{ localGeometry, localActionContent, localVariant, localSize }, props] = pipePropsSplitters(inProps, {
    localVariant: variantPropsSplitter,
    localGeometry: geometryPropsSplitter,
    localSize: sizePropsSplitter,
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

  const geometryProps = useGeometryProps(localGeometry);
  const sizeProps = useSizeProps(localSize);

  // TODO
  useActionGeometrySize(geometryProps, sizeProps);

  const { rounded, padding } = useGeometry(localGeometry, GEOMETRY_OPTIONS);
  const { direction, height, parentHeight, parentWidth, width } = useSize(localSize, {
    defaultDirection: "horizontal",
  });
  const { hoverVariant, variant } = useVariant(localVariant, baseVariant);
  // const { height, contentHeight, spacing, depth } = useFrameDesignProps(localDesign);
  const { startPaddingMode, endPaddingMode, fragment, noLayout } = useActionContent(localActionContent, children);

  const [baseClass, baseInline] = actionStyles({
    height: 7,
    contentHeight: 4.5,
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });
  const [geometryClass, geometryInline] = geometryStyles(rounded, padding);
  const [contentClass, contentInline] = actionContentStyles(
    // contentHeight: 4.5,
    4.5,
    // spacing: 7,
    7,
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
        {fragment}
      </ParentGeometryContextProvider>
    </div>,
  );
}

Action.displayName = "Action";
