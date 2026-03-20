import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createProps, extractProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
import clsx from "clsx";
import { CSSProperties, ReactElement, ReactNode } from "react";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";
import { actionContentProps, useActionContent } from "../action-content/index";
import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
import { DefaultPaddingProvider, paddingProps, ParentPaddingContextProvider, usePadding } from "../padding";
import { ParentRoundedContextProvider, useRounded } from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizeProps, useSize } from "../size";

export interface ActionNestedContentSpecificProps {
  render?: ReactElement;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const actionNestedContentSpecificProps = createProps<ActionNestedContentSpecificProps>({
  render: null,
  className: null,
  style: null,
  children: null,
});

export const actionNestedContentProps = mergeProps(
  actionNestedContentSpecificProps,
  actionContentProps,
  paddingProps,
  sizeProps,
  contentSizeProps,
);

export type ActionNestedContentProps = ComponentPropsBaseWith<
  "div",
  TPropsSplittersTypes<typeof actionNestedContentProps>
>;

/**
 * This component lets you nest Action content
 */
export function ActionNestedContent(inProps: ActionNestedContentProps) {
  const [[localActionNestedContentSpecific, localActionContent, localPadding, localSize, localContentSize], htmlProps] =
    extractProps(inProps, actionNestedContentProps);

  const { children, style, className, render } = localActionNestedContentSpecific;

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
