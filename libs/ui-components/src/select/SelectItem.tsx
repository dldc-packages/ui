import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
import { selectItemStyles } from "@dldc/ui-styles/select";
import clsx from "clsx";

import { actionContentProps, useActionContent } from "../action-content";
import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
import { DefaultPaddingProvider, paddingProps, ParentPaddingContextProvider, usePadding } from "../padding";
import { DefaultRoundedProvider, ParentRoundedContextProvider, roundedProps, useRounded } from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizeProps, useSize } from "../size";

export interface SelectItemSpecificProps {
  disabled?: boolean;
  color?: TPaletteColor;

  // Data attributes
  "data-hover"?: boolean;
  "data-active-item"?: boolean;
}

export const selectItemSpecificProps = createPropsKeys<SelectItemSpecificProps>({
  disabled: null,
  color: null,
  "data-hover": null,
  "data-active-item": null,
});

export const selectItemProps = mergePropsKeys(
  actionContentProps,
  paddingProps,
  roundedProps,
  sizeProps,
  contentSizeProps,
  selectItemSpecificProps,
);

export type SelectItemProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof selectItemProps>>;

export function SelectItem(inProps: SelectItemProps) {
  const [
    [localActionContent, localPadding, localRounded, localSize, localContentSize, localSelectItemSpecific],
    props,
  ] = extractProps(inProps, selectItemProps.content);

  const { color, disabled = false } = localSelectItemSpecific;
  const { style, ref, render, children, className, ...htmlProps } = props;

  const { padding, paddingVarName, parentPaddingVarName, nextPaddingDefaultContext } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName, nextRoundedDefaultContext } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size, nextSizeDefaultContext } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName, nextContentSizeDefaultContext } =
    useContentSize(localContentSize);
  const { startPaddingMode, endPaddingMode, fragment, noLayout } = useActionContent(localActionContent, children);

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

  const contentClass = actionContentClass({
    startPaddingMode,
    endPaddingMode,
    noLayout,
  });

  const [selectItemClassName, selectItemInline] = selectItemStyles({ color, disabled });

  return createRender("div", render, {
    ref,
    className: clsx(contentClass, actionLayoutStylesClasses, selectItemClassName, className),
    style: { ...layoutInline, ...selectItemInline, ...style },
    "data-disabled": disabled ? "" : undefined,
    "data-color": color,
    ...htmlProps,
    children: applyProviders(
      nextPaddingDefaultContext && <DefaultPaddingProvider contextValue={nextPaddingDefaultContext} />,
      nextRoundedDefaultContext && <DefaultRoundedProvider contextValue={nextRoundedDefaultContext} />,
      nextSizeDefaultContext && <DefaultSizeProvider contextValue={nextSizeDefaultContext} />,
      nextContentSizeDefaultContext && <DefaultContentSizeProvider contextValue={nextContentSizeDefaultContext} />,
      <ParentPaddingContextProvider paddingVarName={paddingVarName} />,
      <ParentRoundedContextProvider roundedVarName={roundedVarName} />,
      <ParentSizeContextProvider sizeVarName={sizeVarName} />,
      <ParentContentSizeContextProvider contentSizeVarName={contentSizeVarName} />,
    )(fragment),
  });
}

SelectItem.displayName = "SelectItem";
