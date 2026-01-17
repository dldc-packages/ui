import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CSSProperties } from "../utils/types.js";
import { spinClass, traceClass, traceLengthVar } from "./animations.css.js";

export { spinClass };

export function createTraceAnimation(
  length: number,
): [classNames: string, styles: CSSProperties] {
  return [traceClass, assignInlineVars({ [traceLengthVar]: `${length}px` })];
}
