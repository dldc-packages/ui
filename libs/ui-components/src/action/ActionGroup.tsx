import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { createActionGroupLook, createActionGroupSeparatorLook } from "@dldc/ui-styles/action-group";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

import { ItemGroup, itemGroupProps } from "../item";
import { DefaultHoverVariantProvider, DefaultVariantProvider, useVariant, variantProps } from "../variant";

export interface ActionGroupSpecificProps {
  disabled?: boolean;
  color?: TPaletteColor;
  innerDividers?: "none" | "partial" | "full";
}

export const actionGroupSpecificProps = createPropsKeys<ActionGroupSpecificProps>({
  color: null,
  disabled: null,
  innerDividers: null,
});

export const actionGroupProps = mergePropsKeys(actionGroupSpecificProps, itemGroupProps, variantProps);

export type ActionGroupProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionGroupProps>>;

export function ActionGroup(inProps: ActionGroupProps) {
  const [[localActionGroupSpecific, localItemGroup, localVariant], props] = extractProps(
    inProps,
    actionGroupProps.content,
  );

  const { variant } = useVariant(localVariant, "surface");

  const { children, className, style, render, ...htmlProps } = props;
  const {
    color,
    innerDividers = "full",
    // TODO: handle disabled
    // disabled,
  } = localActionGroupSpecific;

  const renderInnerDividers = innerDividers !== "none";

  const actionGroupLook = createActionGroupLook({ color, variant });
  const actionGroupSeparatorLook = createActionGroupSeparatorLook({
    variant,
    separatorVariant: innerDividers,
  });

  return createRender(ItemGroup, render, {
    noDividers: !renderInnerDividers,
    dividerLook: actionGroupSeparatorLook,
    ...mergeLooks(actionGroupLook, look(className, style)),
    ...localItemGroup,
    ...htmlProps,
    children: applyProviders(
      localVariant?.variant ? <DefaultVariantProvider value={localVariant?.variant} /> : null,
      localVariant?.hoverVariant ? <DefaultHoverVariantProvider value={localVariant?.hoverVariant} /> : null,
    )(children),
  });
}
ActionGroup.displayName = "ActionGroup";
