import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { clsx } from "clsx";

import { look, TLook } from "../utils";

import {
  actionActiveVariantsClass,
  actionClass,
  actionDisabledVariantsClass,
  actionFocusVariantsClass,
  actionHighlightClass,
  actionHighlightColorsClass,
  actionInteractiveClass,
  actionVariantsClass,
} from "./action.css";

interface TCreateActionLookParams {
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  interactive: boolean;
  highlightColor: TPaletteColor;
  highlighted: boolean;
}

export function createActionLook(params: TCreateActionLookParams): TLook {
  const { variant, color, interactive, hoverVariant, highlightColor, highlighted } = params;

  return look(
    clsx(
      actionClass,
      actionVariantsClass[variant],
      interactive && actionInteractiveClass,
      interactive && actionActiveVariantsClass[hoverVariant],
      interactive && actionFocusVariantsClass[hoverVariant],
      interactive && actionDisabledVariantsClass[variant],
      color && dynamicColor[color],
      highlighted && actionHighlightClass,
      highlighted && actionHighlightColorsClass[highlightColor],
    ),
  );
}
