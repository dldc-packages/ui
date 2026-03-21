import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { actionDesignClass, actionLayoutStylesClasses, actionLayoutStylesInline } from "@dldc/ui-styles/action";
import { actionContentClass } from "@dldc/ui-styles/action-content";
import clsx from "clsx";
import { CSSProperties, ReactElement, ReactNode, Ref } from "react";

import { actionContentProps, useActionContent } from "../action-content/index";
import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
import { DefaultPaddingProvider, paddingProps, ParentPaddingContextProvider, usePadding } from "../padding";
import { DefaultRoundedProvider, ParentRoundedContextProvider, roundedProps, useRounded } from "../rounded";
import { DefaultSizeProvider, ParentSizeContextProvider, sizeProps, useSize } from "../size";
import { DefaultHoverVariantProvider, DefaultVariantProvider, useVariant, variantProps } from "../variant";

export interface ActionSpecificProps {
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
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  ref?: Ref<HTMLDivElement>;

  render?: ReactElement;
}

export const actionSpecificProps = createPropsKeys<ActionSpecificProps>({
  "data-focus-visible": null,
  "data-hover": null,
  baseVariant: null,
  color: null,
  highlightColor: null,
  highlighted: null,
  interactive: null,
  disabled: null,
  children: null,
  className: null,
  style: null,
  ref: null,
  render: null,
});

export const actionProps = mergePropsKeys(
  actionSpecificProps,
  variantProps,
  paddingProps,
  roundedProps,
  sizeProps,
  actionContentProps,
  contentSizeProps,
);

export type ActionProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionProps>>;

export function Action(inProps: ActionProps) {
  const [
    [localAction, localVariant, localPadding, localRounded, localSize, localActionContent, localContentSize],
    htmlProps,
  ] = extractProps(inProps, actionProps.content);

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
  } = localAction;

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
