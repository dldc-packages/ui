import * as css from "@dldc/css-builder";
import { geometryPaddingVar, geometryRoundedVar } from "@dldc/ui-core/geometry";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { geometryRoundedClass, geometrySpacing } from "./geometry.css";

export { geometryPaddingVar, geometryRoundedVar, geometrySpacing };

const EXP_DECAY = 0.7;
const QUARTER_UNIT = 0.25;

export interface TGeometryStylesOptions {
  geometryRoundedVarName: string;
  geometryPaddingVarName: string;
  parentGeometryPaddingVarName: string | null;
  parentGeometryRoundedVarName: string | null;
  padding: number | null;
  rounded: number | null;
  defaultRounded?: number;
  defaultPadding?: number;
}

export function geometryStyles(options: TGeometryStylesOptions): [classNames: string, styles: CSSProperties] {
  const {
    geometryRoundedVarName,
    geometryPaddingVarName,
    parentGeometryRoundedVarName,
    parentGeometryPaddingVarName,
    padding,
    rounded,
    defaultPadding = 0,
    defaultRounded = 0,
  } = options;
  return [
    geometryRoundedClass,
    {
      ...assignInlineVars({
        [geometryRoundedVarName]: roundedVar(
          rounded,
          defaultRounded,
          parentGeometryPaddingVarName,
          parentGeometryRoundedVarName,
        ),
        [geometryPaddingVarName]: String(padding ?? defaultPadding),
        [geometryPaddingVar]: css.serialize(css.multiply(`var(${geometryPaddingVarName})`, "0.25rem")),
        [geometryRoundedVar]: css.serialize(css.multiply(`var(${geometryRoundedVarName})`, "0.25rem")),
      }),
    },
  ];
}

function roundedVar(
  rounded: number | null,
  defaultRounded: number,
  parentGeometryPaddingVarName: string | null,
  parentGeometryRoundedVarName: string | null,
): string {
  if (rounded !== null) {
    return String(rounded);
  }
  if (!parentGeometryRoundedVarName || !parentGeometryPaddingVarName) {
    return String(defaultRounded);
  }

  return css.serialize(
    css.max(
      "0",
      css.roundDown(
        css.multiply(
          `var(${parentGeometryRoundedVarName})`,
          css.exp(
            css.multiply(
              -EXP_DECAY,
              css.divide(`var(${parentGeometryPaddingVarName})`, `var(${parentGeometryRoundedVarName})`),
            ),
          ),
        ),
        QUARTER_UNIT,
      ),
    ),
  );
}
