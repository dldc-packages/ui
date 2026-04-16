import clsx from "clsx";

import { look, TLook } from "../utils/look";

import { labelClass, labelDisabledClass } from "./label.css";

export interface TCreateLabelLookParams {
  disabled: boolean;
}

export function createLabelLook({ disabled = false }: TCreateLabelLookParams): TLook {
  // const [contentClass, contentInline] = contentSize(4);

  return look(
    clsx(
      labelClass,
      // contentClass,
      disabled && labelDisabledClass,
    ),
    // { ...contentInline },
  );
}
