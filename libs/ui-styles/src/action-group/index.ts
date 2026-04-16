import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import { paddingVar } from "../padding";
import { look, TLook } from "../utils/look";

import { actionVariantsClass } from "../action/action.css";
import {
  actionGroupClass,
  actionGroupSeparatorActionVariantClass,
  actionGroupSeparatorVariantClass,
  actionGroupVariantsClass,
  partialSeparatorPaddingVar,
} from "./actionGroup.css";

export interface TCreateActionGroupLookParams {
  color: TPaletteColor | undefined;
  variant: TDesignVariant;
}

export function createActionGroupLook(params: TCreateActionGroupLookParams): TLook {
  const { color, variant } = params;

  return look(
    clsx(
      actionGroupClass,
      actionVariantsClass[variant], // This will only set variants variables
      actionGroupVariantsClass[variant],
      color && dynamicColor[color],
    ),
  );
}

export interface TCreateActionGroupSeparatorLookParams {
  variant: TDesignVariant;
  separatorVariant: "none" | "partial" | "full";
}

export function createActionGroupSeparatorLook(params: TCreateActionGroupSeparatorLookParams): TLook {
  const { variant, separatorVariant } = params;

  return look(
    clsx(actionGroupSeparatorActionVariantClass[variant], actionGroupSeparatorVariantClass[separatorVariant]),
    assignInlineVars({
      [partialSeparatorPaddingVar]: paddingVar,
    }),
  );
}
