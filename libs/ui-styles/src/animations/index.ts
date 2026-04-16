import { assignInlineVars } from "@vanilla-extract/dynamic";

import { look, TLook } from "../utils/look";

import { spinClass, traceClass, traceLengthVar } from "./animations.css";

export { spinClass };

export interface TTraceAnimationLookParams {
  length: number;
}

export function createTraceAnimationLook(params: TTraceAnimationLookParams): TLook {
  const { length } = params;
  return look(traceClass, assignInlineVars({ [traceLengthVar]: `${length}px` }));
}
