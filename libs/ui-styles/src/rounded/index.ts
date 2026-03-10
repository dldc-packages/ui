import * as css from "@dldc/css-builder";
import { UNIT_IN_REM } from "@dldc/ui-core/size";
import { roundedVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { roundedBorderRadiusClass } from "./rounded.css";

export { roundedBorderRadiusClass, roundedVar };

const EXP_DECAY = 0.7;
const QUARTER_UNIT = 0.25;
const MIN_AUTO_ROUNDED = 0.25;

export interface TRoundedInlineStylesOptions {
  roundedVarName: string;
  parentPaddingVarName: string | null;
  parentRoundedVarName: string | null;
  rounded: number | "autoFromSize" | null;
  defaultRounded: number;
}

export function roundedInlineStyles(options: TRoundedInlineStylesOptions): CSSProperties {
  const { roundedVarName, parentRoundedVarName, parentPaddingVarName, rounded, defaultRounded } = options;

  return assignInlineVars({
    [roundedVarName]: roundedVarValue(rounded, defaultRounded, parentPaddingVarName, parentRoundedVarName),
    [roundedVar]: css.serialize(css.multiply(`var(${roundedVarName})`, UNIT_IN_REM)),
  });
}

function roundedVarValue(
  rounded: number | "autoFromSize" | null,
  defaultRounded: number,
  parentPaddingVarName: string | null,
  parentRoundedVarName: string | null,
): string {
  if (rounded === "autoFromSize") {
    // TODO
    return "todo";
  }
  if (rounded !== null) {
    return String(rounded);
  }
  if (!parentRoundedVarName || !parentPaddingVarName) {
    return String(defaultRounded);
  }

  return css.serialize(
    css.max(
      MIN_AUTO_ROUNDED,
      css.roundDown(
        css.multiply(
          `var(${parentRoundedVarName})`,
          css.exp(css.multiply(-EXP_DECAY, css.divide(`var(${parentPaddingVarName})`, `var(${parentRoundedVarName})`))),
        ),
        QUARTER_UNIT,
      ),
    ),
  );
}
