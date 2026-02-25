import * as css from "@dldc/css-builder";
import {
  geometryPaddingParentVar,
  geometryPaddingVar,
  geometryRoundedParentVar,
  geometryRoundedVar,
} from "@dldc/ui-core/geometry";
import { sizeToRemString } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";
import { geometryRoundedClass, geometrySpacing } from "./geometry.css";

export { geometryPaddingParentVar, geometryPaddingVar, geometryRoundedParentVar, geometryRoundedVar, geometrySpacing };

export function roundedStyles(): [classNames: string, styles: CSSProperties] {
  return [geometryRoundedClass, {}];
}

export interface TGeometryStylesOptions {
  geometryRoundedVarName: string;
  geometryPaddingVarName: string;
  parentGeometryPaddingVarName: string | null;
  parentGeometryRoundedVarName: string | null;
  padding: number | null;
  rounded: number | null;
}

export function geometryStyles(options: TGeometryStylesOptions): [classNames: string, styles: CSSProperties] {
  const {
    geometryRoundedVarName,
    geometryPaddingVarName,
    parentGeometryRoundedVarName,
    parentGeometryPaddingVarName,
    padding,
    rounded,
  } = options;
  const [roundedClass, roundedInline] = roundedStyles();
  return [
    roundedClass,
    {
      ...roundedInline,
      ...assignInlineVars({
        [geometryRoundedVarName]: roundedVar(rounded, parentGeometryPaddingVarName, parentGeometryRoundedVarName),
        [geometryPaddingVarName]: sizeToRemString(padding ?? 0),
        [geometryPaddingVar]: `var(${geometryPaddingVarName})`,
        [geometryRoundedVar]: `var(${geometryRoundedVarName})`,
      }),
    },
  ];
}

function roundedVar(
  rounded: number | null,
  parentGeometryPaddingVarName: string | null,
  parentGeometryRoundedVarName: string | null,
): string {
  if (rounded !== null) {
    return sizeToRemString(rounded);
  }
  if (!parentGeometryRoundedVarName || !parentGeometryPaddingVarName) {
    return "0";
  }
  //
  // return calc.subtract(`var(${parentGeometryRoundedVarName})`, `var(${parentGeometryPaddingVarName})`);

  return css.serialize(
    css.max(
      "0rem",
      css.multiply(
        `var(${parentGeometryRoundedVarName})`,
        css.exp(
          css.multiply(-1, css.divide(`var(${parentGeometryPaddingVarName})`, `var(${parentGeometryRoundedVarName})`)),
        ),
      ),
    ),
  );

  // return `
  //   max(
  //     0rem,
  //     var(${parentGeometryRoundedVarName}) *
  //     exp(-1 * (var(${parentGeometryPaddingVarName}) / var(${parentGeometryRoundedVarName})))
  //   )
  // `;

  // return `max(0rem, var(${parentGeometryRoundedVarName}) - var(${parentGeometryPaddingVarName}))`;
  // return `
  //   calc(
  //     max(0rem, var(${parentGeometryRoundedVarName}) - var(${parentGeometryPaddingVarName})) *
  //     clamp(0, calc((max(0rem, var(${parentGeometryRoundedVarName}) * 0.2) - var(${parentGeometryPaddingVarName})) * 999999), 1)
  //     +
  //     max(
  //       0rem,
  //       calc(
  //         (var(${parentGeometryRoundedVarName}) - max(0rem, var(${parentGeometryRoundedVarName}) * 0.2)) *
  //         exp(
  //           calc(
  //             -1 * (var(${parentGeometryPaddingVarName}) - max(0rem, var(${parentGeometryRoundedVarName}) * 0.2)) /
  //             (var(${parentGeometryRoundedVarName}) - max(0rem, var(${parentGeometryRoundedVarName}) * 0.2))
  //           )
  //         )
  //       )
  //     ) *
  //     (1 - clamp(0, calc((max(0rem, var(${parentGeometryRoundedVarName}) * 0.2) - var(${parentGeometryPaddingVarName})) * 999999), 1))
  //   )
  // `;
}
