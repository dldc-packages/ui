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
  layer,
} from "./action.css";

export { layer };

interface ActionStylesParams {
  height: number;
  contentHeight: number;
  rounded: number;
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  interactive: boolean;
  highlightColor: TPaletteColor;
  highlighted: boolean;
}

export function actionStyles(params: ActionStylesParams): [className: string, styles: CSSProperties] {
  const { height, contentHeight, rounded, variant, color, interactive, hoverVariant, highlightColor, highlighted } =
    params;

  const [heightClass, heightInline] = heightStyles(height);
  // const [roundedClass, roundedInline] = roundedStyles(rounded);
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
      // roundedClass,
      color && dynamicColor[color],
      highlighted && actionHighlightClass,
      highlighted && actionHighlightColorsClass[highlightColor],
    ),
    {
      ...heightInline,
      ...contentInline,
      // ...roundedInline,
    },
  ];
}
