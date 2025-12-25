import { dynamicColor, TPaletteColor } from "@dldc/design/colors";
import { TDesignVariant } from "@dldc/design/variants";
import { clsx } from "clsx";
import { contentSize, heightStyles, roundedStyles } from "../common/index.js";
import {
  frameBorderSizeClass,
  frameClass,
  frameHighlightClass,
  frameHighlightColorsClass,
  frameInteractiveClass,
  frameInteractiveHoverVariantsClass,
  frameInteractiveVariantsClass,
  frameVariantsClass,
} from "./frame.css.js";

interface FrameStylesParams {
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

export function frameStyles(params: FrameStylesParams): [className: string, styles: React.CSSProperties] {
  const { height, contentHeight, rounded, variant, color, interactive, hoverVariant, highlightColor, highlighted } =
    params;

  const [heightClass, heightInline] = heightStyles(height);
  const [roundedClass, roundedInline] = roundedStyles(rounded);
  const [contentClass, contentInline] = contentSize(contentHeight);

  return [
    clsx(
      heightClass,
      frameClass,
      frameVariantsClass[variant],
      frameBorderSizeClass[variant],
      interactive && frameInteractiveClass,
      interactive && frameInteractiveVariantsClass[variant],
      interactive && frameInteractiveHoverVariantsClass[hoverVariant],
      contentClass,
      roundedClass,
      color && dynamicColor[color],
      highlighted && frameHighlightClass,
      highlighted && frameHighlightColorsClass[highlightColor],
    ),
    {
      ...heightInline,
      ...contentInline,
      ...roundedInline,
    },
  ];
}
