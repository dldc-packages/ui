import clsx from "clsx";
import {
  notProseClass,
  proseBaseClass,
  proseColor,
  proseColorInvert,
  proseSizeDynamicClass,
  proseVars,
} from "./prose.css.js";

export { notProseClass, proseVars };

export type TProseColor = keyof typeof proseColor;

export interface ProseStylesOptions {
  color?: TProseColor;
  invert?: boolean;
}

export function proseStyles({
  color = "neutral",
  invert = false,
}: ProseStylesOptions = {}): string {
  return clsx(
    proseBaseClass,
    proseSizeDynamicClass,
    (invert ? proseColorInvert : proseColor)[color]
  );
}
