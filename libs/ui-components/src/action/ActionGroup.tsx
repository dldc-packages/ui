import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { createActionGroupLook, createActionGroupSeparatorLook } from "@dldc/ui-styles/action-group";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { ReactElement } from "react";

import { contentSizeProps } from "../content-size";
import { ItemGroup } from "../item";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
import { DefaultHoverVariantProvider, DefaultVariantProvider, useVariant, variantProps } from "../variant";

export interface ActionGroupSpecificProps {
  direction?: "horizontal" | "vertical";
  roundedEnds?: "start" | "end" | "both" | "none";
  disabled?: boolean;
  color?: TPaletteColor;
  innerDividers?: "none" | "partial" | "full";
  extraProviders?: (ReactElement | undefined | null | false)[];
}

export const actionGroupSpecificProps = createPropsKeys<ActionGroupSpecificProps>({
  direction: null,
  roundedEnds: null,
  color: null,
  disabled: null,
  innerDividers: null,
  extraProviders: null,
});

export const actionGroupProps = mergePropsKeys(
  actionGroupSpecificProps,
  variantProps,
  mergePropsKeys(sizeProps, contentSizeProps, paddingProps, roundedProps),
);

export type ActionGroupProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof actionGroupProps>>;

export function ActionGroup(inProps: ActionGroupProps) {
  const [[localActionGroupSpecific, localVariant, localItemGroup], props] = extractProps(
    inProps,
    actionGroupProps.content,
  );

  const { variant } = useVariant(localVariant, "surface");

  const { children, className, style, render, ...htmlProps } = props;
  const {
    color,
    innerDividers = "full",
    direction,
    roundedEnds,
    extraProviders = [],
    // TODO: handle disabled
    // disabled,
  } = localActionGroupSpecific;

  const renderInnerDividers = innerDividers !== "none";

  const actionGroupLook = createActionGroupLook({ color, variant });
  const actionGroupSeparatorLook = createActionGroupSeparatorLook({
    variant,
    separatorVariant: innerDividers,
  });

  return (
    <ItemGroup
      render={render}
      noDividers={!renderInnerDividers}
      dividerLook={actionGroupSeparatorLook}
      direction={direction}
      roundedEnds={roundedEnds}
      extraProviders={[
        ...extraProviders,
        localVariant?.variant ? <DefaultVariantProvider key="variant" value={localVariant?.variant} /> : null,
        localVariant?.hoverVariant ? (
          <DefaultHoverVariantProvider key="hoverVariant" value={localVariant?.hoverVariant} />
        ) : null,
      ]}
      {...mergeLooks(actionGroupLook, look(className, style))}
      {...localItemGroup}
      {...htmlProps}
    >
      {children}
    </ItemGroup>
  );
}
ActionGroup.displayName = "ActionGroup";
