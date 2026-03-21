import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createProps, extractProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
import { selectItemStyles } from "@dldc/ui-styles/select";
import clsx from "clsx";
import { ReactElement } from "react";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";
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

  render?: ReactElement;

  // Data attributes
  "data-hover"?: boolean;
  "data-active-item"?: boolean;

  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

export const selectItemSpecificProps = createProps<SelectItemSpecificProps>({
  disabled: null,
  color: null,
  render: null,
  "data-hover": null,
  "data-active-item": null,
  children: null,
  className: null,
  style: null,
  ref: null,
});

export const selectItemProps = mergeProps(
  actionContentProps,
  paddingProps,
  roundedProps,
  sizeProps,
  contentSizeProps,
  selectItemSpecificProps,
);

export type SelectItemProps = ComponentPropsBaseWith<"div", TPropsSplittersTypes<typeof selectItemProps>>;

export function SelectItem(inProps: SelectItemProps) {
  const [
    [localActionContent, localPadding, localRounded, localSize, localContentSize, localSelectItemSpecific],
    htmlProps,
  ] = extractProps(inProps, selectItemProps);

  const { color, disabled = false, ref, render, children, className } = localSelectItemSpecific;

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
    style: { ...layoutInline, ...selectItemInline },
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
