import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { createActionLook } from "@dldc/ui-styles/action";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { ReactElement } from "react";

import { contentSizeProps } from "../content-size";
import { Item } from "../item";
import { itemContentProps } from "../item-content";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
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

  extraProviders?: (ReactElement | undefined | null | false)[];
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
  extraProviders: null,
});

export const actionProps = mergePropsKeys(
  actionSpecificProps,
  variantProps,
  mergePropsKeys(paddingProps, roundedProps, sizeProps, itemContentProps, contentSizeProps),
);

export type ActionProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionProps>>;

export function Action(inProps: ActionProps) {
  const [[localAction, localVariant, localItem], props] = extractProps(inProps, actionProps.content);

  const { className, style, children, render, ref, ...htmlProps } = props;
  const {
    color,
    highlightColor = "red",
    highlighted = false,
    baseVariant = "surface",
    interactive = false,
    disabled = false,
    extraProviders = [],
    "data-hover": dataHover,
    "data-focus-visible": dataFocusVisible,
  } = localAction;

  const isDisabledAndInteractive = disabled && interactive;

  const { hoverVariant, variant, nextHoverVariantDefaultContext, nextVariantDefaultContext } = useVariant(
    localVariant,
    baseVariant,
  );

  const actionLook = createActionLook({
    variant,
    color,
    hoverVariant,
    interactive,
    highlightColor,
    highlighted,
  });

  return (
    <Item
      render={render}
      {...localItem}
      {...mergeLooks(actionLook, look(className, style))}
      aria-disabled={isDisabledAndInteractive}
      data-hover={dataHover}
      data-focus-visible={dataFocusVisible}
      ref={ref}
      extraProviders={[
        ...extraProviders,
        nextVariantDefaultContext && <DefaultVariantProvider key="variant" contextValue={nextVariantDefaultContext} />,
        nextHoverVariantDefaultContext && (
          <DefaultHoverVariantProvider key="hoverVariant" contextValue={nextHoverVariantDefaultContext} />
        ),
      ]}
      {...htmlProps}
    >
      {children}
    </Item>
  );
}

Action.displayName = "Action";
