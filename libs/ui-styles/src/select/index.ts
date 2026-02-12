import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { clsx } from "clsx";

import { contentSize, heightStyles } from "../common";
import { CSSProperties } from "../utils/types";
import { listItemClass, listWrappertClass, selectPopoverClass } from "./select.css";

export { listWrappertClass };

interface SelectItemStylesParams {
  height: number;
  contentHeight: number;
  color: TPaletteColor | undefined;
  disabled: boolean;
}

export function selectItemStyles(params: SelectItemStylesParams): [className: string, styles: CSSProperties] {
  const { height, contentHeight, color } = params;

  const [heightClass, heightInline] = heightStyles(height);
  const [contentClass, contentInline] = contentSize(contentHeight);

  return [
    clsx(heightClass, listItemClass, contentClass, color && dynamicColor[color]),
    { ...heightInline, ...contentInline },
  ];
}

export function selectPopoverStyles(): [className: string, styles: CSSProperties] {
  return [clsx(selectPopoverClass, listWrappertClass), {}];
}
