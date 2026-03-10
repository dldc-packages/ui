import clsx from "clsx";

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

export interface ProseStylesOptions {
  color?: TProseColor;
  invert?: boolean;
}

export function proseStyles({ color = "neutral", invert = false }: ProseStylesOptions = {}): string {
  return clsx(proseBaseClass, proseSizeDynamicClass, (invert ? proseColorInvert : proseColor)[color]);
}
