import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { clsx } from "clsx";

import { CSSProperties } from "../utils/types";

import { listItemClass, listWrappertClass, selectPopoverClass } from "./select.css";

export { listWrappertClass };

interface SelectItemStylesParams {
  color: TPaletteColor | undefined;
  disabled: boolean;
}

export function selectItemStyles(params: SelectItemStylesParams): [className: string, styles: CSSProperties] {
  const { color } = params;

  return [clsx(listItemClass, color && dynamicColor[color]), {}];
}

export function selectPopoverStyles(): [className: string, styles: CSSProperties] {
  return [clsx(selectPopoverClass, listWrappertClass), {}];
}
