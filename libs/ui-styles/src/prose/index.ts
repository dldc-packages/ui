import clsx from "clsx";

import { look, TLook } from "../utils/look";

import {
  notProseBleedClass,
  notProseClass,
  notProseContentClass,
  proseBaseClass,
  proseBleedClass,
  proseColor,
  proseColorInvert,
  proseSizeDynamicClass,
  proseVars,
} from "./prose.css";

export { notProseBleedClass, notProseClass, notProseContentClass, proseBleedClass, proseVars };

export type TProseColor = keyof typeof proseColor;

export interface TCreateProseLookParams {
  color?: TProseColor;
  invert?: boolean;
}

export function createProseLook({ color = "neutral", invert = false }: TCreateProseLookParams = {}): TLook {
  return look(clsx(proseBaseClass, proseSizeDynamicClass, (invert ? proseColorInvert : proseColor)[color]));
}
