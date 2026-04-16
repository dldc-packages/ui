import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { createActionLook } from "@dldc/ui-styles/action";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

import { Item, itemProps } from "../item";
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
});

export const actionProps = mergePropsKeys(actionSpecificProps, variantProps, itemProps);

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

  return createRender(Item, render, {
    ...localItem,
    ...mergeLooks(actionLook, look(className, style)),
    "aria-disabled": isDisabledAndInteractive,
    "data-hover": dataHover,
    "data-focus-visible": dataFocusVisible,
    ref,
    ...htmlProps,
    children: applyProviders(
      nextVariantDefaultContext && <DefaultVariantProvider contextValue={nextVariantDefaultContext} />,
      nextHoverVariantDefaultContext && <DefaultHoverVariantProvider contextValue={nextHoverVariantDefaultContext} />,
    )(children),
  });
}

Action.displayName = "Action";
