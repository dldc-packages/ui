import * as css from "@dldc/css-builder";
import { UNIT_IN_REM, UNIT_IN_REM_STRING } from "@dldc/ui-core/size";
import { roundedVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { roundedBorderRadiusClass } from "./rounded.css";

export { roundedBorderRadiusClass, roundedVar };

const EXP_DECAY = 0.7;
const MIN_AUTO_ROUNDED = 0.25;
const AUTO_ROUNDED_FACTOR = 0.25;

export interface TRoundedInlineStylesOptions {
  roundedVarName: string;
  parentPaddingVarName: string | null;
  parentRoundedVarName: string | null;
  rounded: number | "autoFromSize" | null;
  defaultRounded: number;
  sizeVarName: string | null;
}

export function roundedInlineStyles({
  roundedVarName,
  defaultRounded,
  parentPaddingVarName,
  parentRoundedVarName,
  rounded,
  sizeVarName,
}: TRoundedInlineStylesOptions): CSSProperties {
  return assignInlineVars({
    [roundedVarName]: css.maybeSerialize(
      roundedVarValue({
        rounded,
        parentPaddingVarName,
        parentRoundedVarName,
        defaultRounded,
        sizeVarName,
      }),
    ),
    [roundedVar]: css.serialize(css.multiply(css.var(roundedVarName), UNIT_IN_REM_STRING)),
  });
}

export interface TRoundedVarValueParams {
  rounded: number | "autoFromSize" | null;
  parentPaddingVarName: string | null;
  parentRoundedVarName: string | null;
  sizeVarName: string | null;
  defaultRounded: number;
}

export function roundedVarValue({
  rounded,
  parentRoundedVarName,
  parentPaddingVarName,
  sizeVarName,
  defaultRounded,
}: TRoundedVarValueParams) {
  if (typeof rounded === "number") {
    return css.number(rounded);
  }
  // Compute auto-rounded from size if we don't have parent rounded or parent padding, or if we are in autoFromSize mode
  if (rounded === "autoFromSize" || !parentRoundedVarName || !parentPaddingVarName) {
    if (!sizeVarName) {
      return css.number(defaultRounded);
    }
    return css.max(
      MIN_AUTO_ROUNDED,
      css.roundDown(css.multiply(css.var(sizeVarName), AUTO_ROUNDED_FACTOR), UNIT_IN_REM),
    );
  }
  // Auto-rounded is computed with an exponential decay depending on the ratio between parent padding and parent rounded
  return css.max(
    MIN_AUTO_ROUNDED,
    css.roundDown(
      css.multiply(
        css.var(parentRoundedVarName),
        css.exp(css.multiply(-EXP_DECAY, css.divide(css.var(parentPaddingVarName), css.var(parentRoundedVarName)))),
      ),
      UNIT_IN_REM,
    ),
  );
}
