import { dynamicColor, TPaletteColor } from "@dldc/ui-core/colors";
import { clsx } from "clsx";

import { look, TLook } from "../utils/look";

import { listItemClass, listWrappertClass, selectPopoverClass } from "./select.css";

export { listWrappertClass };

interface TCreateSelectItemLookParams {
  color: TPaletteColor | undefined;
  disabled: boolean;
}

export function createSelectItemLook(params: TCreateSelectItemLookParams): TLook {
  const { color } = params;

  return look(clsx(listItemClass, color && dynamicColor[color]));
}

export function createSelectPopoverLook(): TLook {
  return look(clsx(selectPopoverClass, listWrappertClass));
}
