import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { ReactElement } from "react";
import { ComponentPropsBaseWith, mergeRender } from "../utils";
import { DefaultDesignProvider, designPropsSplitter, useFrameDesignProps } from "./DesignContext";
import { TDesignProps } from "./types";
import { contentSize } from "@dldc/ui-styles/common";
import { clsx } from "clsx";

export type DesignWrapperProps = ComponentPropsBaseWith<
  "div",
  TDesignProps & {
    color?: TPaletteColor;

    /**
     * Defines the variant used as the base for this Frame.
     * For example, Input components use the "input" variant by default.
     */
    baseVariant?: TDesignVariant;

    render?: ReactElement;
  }
>;

/**
 * Render an element, applying design context props and variables
 *
 * @param inProps
 * @returns
 */
export function DesignWrapper(inProps: DesignWrapperProps) {
  const [{ localDesign }, props] = pipePropsSplitters(inProps, {
    localDesign: designPropsSplitter,
    // localFrameContent: frameContentPropsSplitter,
  });

  const { color, baseVariant = "surface", style, className, ref, render, children, ...htmlProps } = props;
  const { contentHeight } = useFrameDesignProps(localDesign, baseVariant);

  const [contentClass, contentInline] = contentSize(contentHeight);
  const colorClass = color && dynamicColor[color];

  return (
    <DefaultDesignProvider
      contentHeight={inProps.contentHeight}
      height={inProps.height}
      rounded={inProps.rounded}
      hoverVariant={inProps.hoverVariant}
      spacing={inProps.spacing}
      variant={inProps.variant}
    >
      {mergeRender(
        render,
        <div
          className={clsx(contentClass, colorClass, className)}
          style={{ ...contentInline, ...style }}
          ref={ref}
          {...htmlProps}
        >
          {children}
        </div>,
      )}
    </DefaultDesignProvider>
  );
}

DesignWrapper.displayName = "DesignWrapper";
