import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
import clsx from "clsx";

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

export const actionNestedContentProps = mergePropsKeys(actionContentProps, paddingProps, sizeProps, contentSizeProps);

export type ActionNestedContentProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionNestedContentProps>>;

/**
 * This component lets you nest Action content
 */
export function ActionNestedContent(inProps: ActionNestedContentProps) {
  const [[localActionContent, localPadding, localSize, localContentSize], props] = extractProps(
    inProps,
    actionNestedContentProps.content,
  );

  const { children, style, className, render, ...htmlProps } = props;

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
