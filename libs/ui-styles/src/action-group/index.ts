import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import { paddingVar } from "../padding";
import { CSSProperties } from "../utils/types";

import { actionVariantsClass } from "../action/action.css";
import {
  actionGroupClass,
  actionGroupDirectionClass,
  actionGroupSeparatorActionVariantClass,
  actionGroupSeparatorClass,
  actionGroupSeparatorDirectionClass,
  actionGroupSeparatorVariantClass,
  actionGroupVariantsClass,
  partialSeparatorPaddingVar,
} from "./actionGroup.css";

export interface ActionGroupStylesParams {
  direction: "horizontal" | "vertical";
  color: TPaletteColor | undefined;
  variant: TDesignVariant;
}

export function actionGroupStyles(params: ActionGroupStylesParams): [className: string, styles: CSSProperties] {
  const { direction, color, variant } = params;

  return [
    clsx(
      actionGroupClass,
      actionGroupDirectionClass[direction],
      actionVariantsClass[variant], // This will only set variants variables
      actionGroupVariantsClass[variant],
      color && dynamicColor[color],
    ),
    {},
  ];
}

export interface ActionGroupSeparatorStylesParams {
  direction: "horizontal" | "vertical";
  variant: TDesignVariant;
  separatorVariant: "none" | "partial" | "full";
}

export function actionGroupSeparatorStyles(
  params: ActionGroupSeparatorStylesParams,
): [className: string, styles: CSSProperties] {
  const { direction, variant, separatorVariant } = params;

  return [
    clsx(
      actionGroupSeparatorClass,
      actionGroupSeparatorDirectionClass[direction],
      actionGroupSeparatorActionVariantClass[variant],
      actionGroupSeparatorVariantClass[separatorVariant],
    ),
    assignInlineVars({
      [partialSeparatorPaddingVar]: paddingVar,
    }),
  ];
}
