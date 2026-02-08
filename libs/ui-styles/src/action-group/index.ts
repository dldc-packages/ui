import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { clsx } from "clsx";

import { actionBorderSizeClass } from "../action/action.css";
import { CSSProperties } from "../utils/types";
import {
  actionGroupClass,
  actionGroupDirectionClass,
  actionGroupSeparatorClass,
  actionGroupSeparatorDirectionClass,
  actionGroupSeparatorVariantClass,
  actionGroupVariantsClass,
  layer,
} from "./actionGroup.css";

export { layer };

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
      actionBorderSizeClass[variant],
      actionGroupVariantsClass[variant],
      color && dynamicColor[color],
    ),
    {},
  ];
}

export interface ActionGroupSeparatorStylesParams {
  direction: "horizontal" | "vertical";
  variant: TDesignVariant;
}

export function actionGroupSeparatorStyles(
  params: ActionGroupSeparatorStylesParams,
): [className: string, styles: CSSProperties] {
  const { direction, variant } = params;

  return [
    clsx(
      actionGroupSeparatorClass,
      actionGroupSeparatorDirectionClass[direction],
      actionGroupSeparatorVariantClass[variant],
    ),
    {},
  ];
}
