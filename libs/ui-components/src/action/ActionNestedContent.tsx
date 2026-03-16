import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
// import { heightStyles } from "@dldc/ui-styles/common";
import { pipePropsSplitters } from "@dldc/utils/props-splitters";
import clsx from "clsx";
import { ReactElement } from "react";

import { actionContentPropsSplitter, TActionContentProps, useActionContent } from "../action-content/index";
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
import { ParentRoundedContextProvider, useRounded } from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizePropsSplitter, TSizeProps, useSize } from "../size";
import { applyProviders, createRender } from "../utils";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ActionSpecificProps = TActionContentProps & TPaddingProps & TSizeProps & TContentSizeProps;

export type ActionNestedContentProps = ComponentPropsBaseWith<
  "div",
  ActionSpecificProps & {
    render?: ReactElement;
  }
>;

/**
 * This component let you nest Action content
 */
export function ActionNestedContent(inProps: ActionNestedContentProps) {
  const [{ localPadding, localActionContent, localSize, localContentSize }, props] = pipePropsSplitters(inProps, {
    localPadding: paddingPropsSplitter,
    localSize: sizePropsSplitter,
    localActionContent: actionContentPropsSplitter,
    localContentSize: contentSizePropsSplitter,
  });

  const {
    children,

    style,
    className,
    render,

    ...htmlProps
  } = props;

  const { padding, paddingVarName, parentPaddingVarName, nextPaddingDefaultContext } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName } = useRounded({});
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

  return createRender("div", render, {
    className: clsx(actionLayoutStylesClasses, contentClass, className),
    style: { ...layoutInline, ...style },
    ...htmlProps,
    children: applyProviders(
      nextPaddingDefaultContext && <DefaultPaddingProvider contextValue={nextPaddingDefaultContext} />,
      nextSizeDefaultContext && <DefaultSizeProvider contextValue={nextSizeDefaultContext} />,
      nextContentSizeDefaultContext && <DefaultContentSizeProvider contextValue={nextContentSizeDefaultContext} />,
      <ParentPaddingContextProvider paddingVarName={paddingVarName} />,
      <ParentRoundedContextProvider roundedVarName={roundedVarName} />,
      <ParentSizeContextProvider sizeVarName={sizeVarName} />,
      <ParentContentSizeContextProvider contentSizeVarName={contentSizeVarName} />,
    )(fragment),
  });
}

ActionNestedContent.displayName = "ActionNestedContent";
