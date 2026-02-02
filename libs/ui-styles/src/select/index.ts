import { listWrappertClass, selectPopoverClass, listItemClass } from "./select.css";
import { CSSProperties } from "../utils/types";
import { TDesignVariant } from "@dldc/ui-core/variants";
import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { contentSize, heightStyles, roundedStyles } from "../common";
import { clsx } from "clsx";

export { listWrappertClass };

interface SelectItemStylesParams {
  height: number;
  contentHeight: number;
  rounded: number;
  variant: TDesignVariant;
  color: TPaletteColor | undefined;
  hoverVariant: TDesignVariant;
  disabled: boolean;
}

export function selectItemStyles(params: SelectItemStylesParams): [className: string, styles: CSSProperties] {
  const { height, rounded, contentHeight, color } = params;

  const [heightClass, heightInline] = heightStyles(height);
  const [roundedClass, roundedInline] = roundedStyles(rounded);
  const [contentClass, contentInline] = contentSize(contentHeight);

  return [
    clsx(heightClass, listItemClass, contentClass, roundedClass, color && dynamicColor[color]),
    { ...heightInline, ...contentInline, ...roundedInline },
  ];
}

interface SelectPopoverStylesParams {
  rounded: number;
}

export function selectPopoverStyles({
  rounded,
}: SelectPopoverStylesParams): [className: string, styles: CSSProperties] {
  const [roundedClass, roundedInline] = roundedStyles(rounded);
  return [clsx(selectPopoverClass, listWrappertClass, roundedClass), { ...roundedInline }];
}
