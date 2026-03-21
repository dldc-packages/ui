import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { contentSizeLineHeightClass } from "@dldc/ui-styles/content-size";
import { clsx } from "clsx";
import { CSSProperties, ReactElement, Ref } from "react";

import { contentSizeProps, useContentSize } from "../content-size";
import { DefaultDesignProvider } from "../default-design-provider";
import { paddingProps, usePadding } from "../padding";
import { roundedProps, useRounded } from "../rounded";
import { sizeProps, useSize } from "../size";
import { variantProps } from "../variant";

export interface DesignWrapperSpecificProps {
  color?: TPaletteColor;
  render?: ReactElement;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
  children?: React.ReactNode;
}

export const designWrapperSpecificProps = createPropsKeys<DesignWrapperSpecificProps>({
  color: null,
  render: null,
  className: null,
  style: null,
  ref: null,
  children: null,
});

export const designWrapperProps = mergePropsKeys(
  variantProps,
  paddingProps,
  roundedProps,
  sizeProps,
  contentSizeProps,
  designWrapperSpecificProps,
);

export type DesignWrapperProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof designWrapperProps>>;

/**
 * Render an element, applying design context props and variables
 *
 * @param inProps
 * @returns
 */
export function DesignWrapper(inProps: DesignWrapperProps) {
  const [
    [localVariant, localPadding, localRounded, localSize, localContentSize, localDesignWrapperSpecific],
    htmlProps,
  ] = extractProps(inProps, designWrapperProps.content);

  const { padding, paddingVarName, parentPaddingVarName } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName } = useContentSize(localContentSize);

  const { color, className, style, ref, render, children } = localDesignWrapperSpecific;

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
