import clsx from "clsx";
import {
  notProseClass,
  proseBaseClass,
  proseBleedClass,
  proseColor,
  proseColorInvert,
  proseSizeDynamicClass,
  proseVars,
} from "./prose.css";

export { notProseClass, proseBleedClass, proseVars };

export type TProseColor = keyof typeof proseColor;

export interface ProseStylesOptions {
  color?: TProseColor;
  invert?: boolean;
}

export function proseStyles({ color = "neutral", invert = false }: ProseStylesOptions = {}): string {
  return clsx(proseBaseClass, proseSizeDynamicClass, (invert ? proseColorInvert : proseColor)[color]);
}
