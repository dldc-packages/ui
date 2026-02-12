import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { clsx } from "clsx";

import { contentSize, heightStyles } from "../common/index";
import { CSSProperties } from "../utils/types";
import {
  actionBorderSizeClass,
  actionClass,
  actionHighlightClass,
  actionHighlightColorsClass,
  actionInteractiveClass,
  actionInteractiveHoverVariantsClass,
  actionInteractiveVariantsClass,
  actionVariantsClass,
} from "./action.css";

interface ActionStylesParams {
  height: number;
  contentHeight: number;
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  interactive: boolean;
  highlightColor: TPaletteColor;
  highlighted: boolean;
}

export function actionStyles(params: ActionStylesParams): [className: string, styles: CSSProperties] {
  const { height, contentHeight, variant, color, interactive, hoverVariant, highlightColor, highlighted } = params;

  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = contentSize(contentHeight);

  return [
    clsx(
      heightClass,
      actionClass,
      actionVariantsClass[variant],
      actionBorderSizeClass[variant],
      interactive && actionInteractiveClass,
      interactive && actionInteractiveVariantsClass[variant],
      interactive && actionInteractiveHoverVariantsClass[hoverVariant],
      contentClass,
      color && dynamicColor[color],
      highlighted && actionHighlightClass,
      highlighted && actionHighlightColorsClass[highlightColor],
    ),
    {
      ...heightInline,
      ...contentInline,
    },
  ];
}
