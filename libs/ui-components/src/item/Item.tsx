import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createItemLook } from "@dldc/ui-styles/item";
import { createItemContentLook } from "@dldc/ui-styles/item-content";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { ReactElement } from "react";

import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
import { itemContentProps, useItemContent } from "../item-content/index";
import { DefaultPaddingProvider, paddingProps, ParentPaddingContextProvider, usePadding } from "../padding";
import { DefaultRoundedProvider, ParentRoundedContextProvider, roundedProps, useRounded } from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizeProps, useSize } from "../size";

export interface ItemSpecificProps {
  extraProviders?: (ReactElement | undefined | null | false)[];
}

const itemSpecificProps = createPropsKeys<ItemSpecificProps>({
  extraProviders: null,
});

export const itemProps = mergePropsKeys(
  itemSpecificProps,
  paddingProps,
  roundedProps,
  sizeProps,
  itemContentProps,
  contentSizeProps,
);

export type ItemProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof itemProps>>;

export function Item(inProps: ItemProps) {
  const [[localItemSpecific, localPadding, localRounded, localSize, localItemContent, localContentSize], props] =
    extractProps(inProps, itemProps.content);

  const { className, style, children, render, ref, ...htmlProps } = props;

  const { padding, paddingVarName, parentPaddingVarName, nextPaddingDefaultContext } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName, nextRoundedDefaultContext } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size, nextSizeDefaultContext } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName, nextContentSizeDefaultContext } =
    useContentSize(localContentSize);
  const { startPaddingMode, endPaddingMode, fragment, noLayout } = useItemContent(localItemContent, children);

  const { extraProviders = [] } = localItemSpecific;

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

  const itemContentLook = createItemContentLook({
    startPaddingMode,
    endPaddingMode,
    noLayout,
  });

  return createRender("div", render, {
    ...mergeLooks(itemLook, itemContentLook, look(className, style)),
    ref,
    ...htmlProps,
    children: applyProviders(
      ...extraProviders,
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

Item.displayName = "Item";
