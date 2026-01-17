import { assignInlineVars } from "@vanilla-extract/dynamic";
import { spinClass, traceClass, traceLengthVar } from "./animations.css.js";

export { spinClass };

export function createTraceAnimation(
  length: number,
): [classNames: string, styles: React.CSSProperties] {
  return [traceClass, assignInlineVars({ [traceLengthVar]: `${length}px` })];
}
