import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { contentSize } from "@dldc/ui-styles/common";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import { clsx } from "clsx";
import { ReactElement } from "react";

import { DefaultDesignProvider, designPropsSplitter, useFrameDesignProps } from "../design-context/DesignContext";
import { TDesignProps } from "../design-context/types";
import { ComponentPropsBaseWith, mergeRender } from "../utils";
import { DefaultVariantProvider, TDesignVariantProps, variantPropsSplitter } from "../variant";

export type DesignWrapperProps = ComponentPropsBaseWith<
  "div",
  TDesignProps &
    TDesignVariantProps & {
      color?: TPaletteColor;

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
    localDesignVariant: variantPropsSplitter,
  });

  const { color, style, className, ref, render, children, ...htmlProps } = props;
  const { contentHeight } = useFrameDesignProps(localDesign);

  const [contentClass, contentInline] = contentSize(contentHeight);
  const colorClass = color && dynamicColor[color];

  return (
    <DefaultDesignProvider
      contentHeight={inProps.contentHeight}
      height={inProps.height}
      rounded={inProps.rounded}
      spacing={inProps.spacing}
    >
      <DefaultVariantProvider variant={inProps.variant} hoverVariant={inProps.hoverVariant}>
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
      </DefaultVariantProvider>
    </DefaultDesignProvider>
  );
}
DesignWrapper.displayName = "DesignWrapper";
