import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { contentSizeLineHeightClass } from "@dldc/ui-styles/content-size";
import { createItemLook } from "@dldc/ui-styles/item";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { clsx } from "clsx";

import { contentSizeProps, useContentSize } from "../content-size";
import { DefaultDesignProvider } from "../default-design-provider";
import { paddingProps, usePadding } from "../padding";
import { roundedProps, useRounded } from "../rounded";
import { sizeProps, useSize } from "../size";
import { variantProps } from "../variant";

export interface DesignWrapperSpecificProps {
  color?: TPaletteColor;
}

export const designWrapperSpecificProps = createPropsKeys<DesignWrapperSpecificProps>({
  color: null,
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
  const [[localVariant, localPadding, localRounded, localSize, localContentSize, localDesignWrapperSpecific], props] =
    extractProps(inProps, designWrapperProps.content);

  const { render, className, style, children, ref, ...htmlProps } = props;
  const { color } = localDesignWrapperSpecific;

  const { padding, paddingVarName, parentPaddingVarName } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName } = useContentSize(localContentSize);

  const colorClass = color && dynamicColor[color];

  // Compute CSS vars same as Action to get CSS vars available for any child, even if not using Action or other components
  const itemLook = createItemLook({
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
        ...mergeLooks(itemLook, look(clsx(colorClass, contentSizeLineHeightClass)), look(className, style)),
        ref,
        ...htmlProps,
        children,
      })}
    </DefaultDesignProvider>
  );
}

DesignWrapper.displayName = "DesignWrapper";
