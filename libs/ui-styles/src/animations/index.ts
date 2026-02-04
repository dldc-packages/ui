import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";
import { spinClass, traceClass, traceLengthVar, layer } from "./animations.css";

export { spinClass, layer };

export function createTraceAnimation(length: number): [classNames: string, styles: CSSProperties] {
  return [traceClass, assignInlineVars({ [traceLengthVar]: `${length}px` })];
}
