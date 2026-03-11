import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentStyles } from "@dldc/ui-styles/action-content";
import { selectItemStyles } from "@dldc/ui-styles/select";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content";
import {
  contentSizePropsSplitter,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  TContentSizeProps,
  useContentSize,
} from "../content-size";
import {
  DefaultPaddingProvider,
  paddingPropsSplitter,
  ParentPaddingContextProvider,
  TPaddingProps,
  usePadding,
} from "../padding";
import {
  DefaultRoundedProvider,
  ParentRoundedContextProvider,
  roundedPropsSplitter,
  TRoundedProps,
  useRounded,
} from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizePropsSplitter, TSizeProps, useSize } from "../size";
import { applyProviders, createRender } from "../utils";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type SelectItemSpecificProps = TActionContentProps &
  TPaddingProps &
  TRoundedProps &
  TSizeProps &
  TContentSizeProps & {
    disabled?: boolean;
    color?: TPaletteColor;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-active-item"?: boolean;
  };

export type SelectItemProps = ComponentPropsBaseWith<"div", SelectItemSpecificProps>;

export function SelectItem(inProps: SelectItemProps) {
  const [{ localPadding, localRounded, localActionContent, localSize, localContentSize }, props] = pipePropsSplitters(
    inProps,
    {
      localPadding: paddingPropsSplitter,
      localRounded: roundedPropsSplitter,
      localSize: sizePropsSplitter,
      localActionContent: actionContentPropsSplitter,
      localContentSize: contentSizePropsSplitter,
    },
  );

  const { color, disabled = false, ref, render, children, className, ...htmlProps } = props;

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

  const [contentClass, contentInline] = actionContentStyles({
    startPaddingMode,
    endPaddingMode,
    noLayout,
  });

  const [selectItemClassName, selectItemInline] = selectItemStyles({ color, disabled });

  return createRender("div", render, {
    ref,
    className: clsx(contentClass, actionLayoutStylesClasses, selectItemClassName, className),
    style: { ...layoutInline, ...contentInline, ...selectItemInline },
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
