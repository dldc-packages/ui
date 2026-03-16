import { createRender } from "@dldc/react-utils/create-render";
import { pipePropsSplitters } from "@dldc/react-utils/props-splitters";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { contentSizeLineHeightClass } from "@dldc/ui-styles/content-size";
import { clsx } from "clsx";
import { ReactElement } from "react";

import { contentSizePropsSplitter, TContentSizeProps, useContentSize } from "../content-size";
import { DefaultDesignProvider } from "../default-design-provider";
import { paddingPropsSplitter, TPaddingProps, usePadding } from "../padding";
import { roundedPropsSplitter, TRoundedProps, useRounded } from "../rounded";
import { sizePropsSplitter, TSizeProps, useSize } from "../size";
import { TVariantProps, variantPropsSplitter } from "../variant";

export type DesignWrapperProps = ComponentPropsBaseWith<
  "div",
  TPaddingProps &
    TRoundedProps &
    TSizeProps &
    TContentSizeProps &
    TVariantProps & {
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
  const [{ localVariant, localPadding, localRounded, localSize, localContentSize }, props] = pipePropsSplitters(
    inProps,
    {
      localVariant: variantPropsSplitter,
      localPadding: paddingPropsSplitter,
      localRounded: roundedPropsSplitter,
      localSize: sizePropsSplitter,
      localContentSize: contentSizePropsSplitter,
    },
  );

  const { padding, paddingVarName, parentPaddingVarName } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName } = useContentSize(localContentSize);

  const { color, className, style, ref, render, children, ...htmlProps } = props;

  const colorClass = color && dynamicColor[color];

  // Compute CSS vars same as Action to get CSS vars available for any child, even if not using Action or other components
  const layoutInline = actionLayoutStylesInline({
    defaultSize: 7,
    defaultRounded: 2,
    defaultPadding: 1,
    padding,
    paddingVarName,
    parentPaddingVarName,
    parentRoundedVarName,
    parentSizeVarName,
    rounded,
    roundedVarName,
    size,
    sizeVarName,
    contentSize,
    contentSizeVarName,
    parentContentSizeVarName,
  });

  return (
    <DefaultDesignProvider {...localVariant} {...localSize} {...localContentSize} {...localPadding} {...localRounded}>
      {createRender("div", render, {
        className: clsx(colorClass, contentSizeLineHeightClass, className),
        style: { ...layoutInline, ...style },
        ref,
        ...htmlProps,
        children,
      })}
    </DefaultDesignProvider>
  );
}

DesignWrapper.displayName = "DesignWrapper";
