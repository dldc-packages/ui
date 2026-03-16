import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { actionDesignClass, actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
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
import {
  DefaultHoverVariantProvider,
  DefaultVariantProvider,
  TVariantProps,
  useVariant,
  variantPropsSplitter,
} from "../variant";

export type ActionSpecificProps = TActionContentProps &
  TPaddingProps &
  TRoundedProps &
  TSizeProps &
  TContentSizeProps &
  TVariantProps & {
    /**
     * This props only impact styling but is never forwarded to the underlying element.
     * Use `render={<button disabled={true} />}` to pass native props to the underlying element.
     */
    disabled?: boolean;

    color?: TPaletteColor;
    highlightColor?: TPaletteColor;
    highlighted?: boolean;

    /**
     * Defines the variant used as the base for this Action.
     * For example, Input components use the "input" variant by default.
     */
    baseVariant?: TDesignVariant;

    interactive?: boolean;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ActionProps = ComponentPropsBaseWith<
  "div",
  ActionSpecificProps & {
    render?: ReactElement;
  }
>;

export function Action(inProps: ActionProps) {
  const [{ localVariant, localPadding, localRounded, localActionContent, localSize, localContentSize }, props] =
    pipePropsSplitters(inProps, {
      localVariant: variantPropsSplitter,
      localPadding: paddingPropsSplitter,
      localRounded: roundedPropsSplitter,
      localSize: sizePropsSplitter,
      localActionContent: actionContentPropsSplitter,
      localContentSize: contentSizePropsSplitter,
    });

  const {
    color,
    highlightColor = "red",
    highlighted = false,

    baseVariant = "surface",
    interactive = false,

    children,
    disabled = false,
    style,
    className,
    ref,
    render,

    ...htmlProps
  } = props;

  const isDisabledAndInteractive = disabled && interactive;

  const { padding, paddingVarName, parentPaddingVarName, nextPaddingDefaultContext } = usePadding(localPadding);
  const { rounded, roundedVarName, parentRoundedVarName, nextRoundedDefaultContext } = useRounded(localRounded);
  const { sizeVarName, parentSizeVarName, size, nextSizeDefaultContext } = useSize(localSize);
  const { contentSize, contentSizeVarName, parentContentSizeVarName, nextContentSizeDefaultContext } =
    useContentSize(localContentSize);
  const { hoverVariant, variant, nextHoverVariantDefaultContext, nextVariantDefaultContext } = useVariant(
    localVariant,
    baseVariant,
  );
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

  const designClass = actionDesignClass({
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });

  const contentClass = actionContentClass({
    startPaddingMode,
    endPaddingMode,
    noLayout,
  });

  return createRender("div", render, {
    className: clsx(designClass, actionLayoutStylesClasses, contentClass, className),
    style: { ...layoutInline, ...style },
    "aria-disabled": isDisabledAndInteractive,
    ref,
    ...htmlProps,
    children: applyProviders(
      nextPaddingDefaultContext && <DefaultPaddingProvider contextValue={nextPaddingDefaultContext} />,
      nextRoundedDefaultContext && <DefaultRoundedProvider contextValue={nextRoundedDefaultContext} />,
      nextSizeDefaultContext && <DefaultSizeProvider contextValue={nextSizeDefaultContext} />,
      nextContentSizeDefaultContext && <DefaultContentSizeProvider contextValue={nextContentSizeDefaultContext} />,
      nextVariantDefaultContext && <DefaultVariantProvider contextValue={nextVariantDefaultContext} />,
      nextHoverVariantDefaultContext && <DefaultHoverVariantProvider contextValue={nextHoverVariantDefaultContext} />,
      <ParentPaddingContextProvider paddingVarName={paddingVarName} />,
      <ParentRoundedContextProvider roundedVarName={roundedVarName} />,
      <ParentSizeContextProvider sizeVarName={sizeVarName} />,
      <ParentContentSizeContextProvider contentSizeVarName={contentSizeVarName} />,
    )(fragment),
  });
}

Action.displayName = "Action";
