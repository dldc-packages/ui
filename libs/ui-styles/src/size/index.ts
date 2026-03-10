import * as css from "@dldc/css-builder";
import { UNIT_IN_REM } from "@dldc/ui-core/size";
import { sizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { sizeMinSizeClass } from "./size.css";

export { sizeMinSizeClass };

const QUARTER_UNIT = 0.25;
const SIZE_PADDING_PITCH = 0.36;
const SIZE_PADDING_OFFSET = -0.74;
const MIN_AUTO_PADDING = 0.5;

export interface TSizeStylesOptions {
  size: number | null;
  sizeVarName: string;
  parentSizeVarName: string | null;
  parentPaddingVarName: string | null;
  defaultSize?: number;
}

export function sizeInlineStyles(options: TSizeStylesOptions): CSSProperties {
  const { size, sizeVarName, parentSizeVarName, parentPaddingVarName, defaultSize } = options;
  return assignInlineVars({
    [sizeVarName]: sizeValue(size, defaultSize ?? null, parentSizeVarName, parentPaddingVarName),
    [sizeVar]: css.serialize(css.multiply(`var(${sizeVarName})`, UNIT_IN_REM)),
  });
}

function sizeValue(
  size: number | null,
  defaultSize: number | null,
  parentSizeVarName: string | null,
  parentGeometryPaddingVarName: string | null,
): string {
  if (size !== null) {
    return String(size);
  }
  if (parentSizeVarName && parentGeometryPaddingVarName) {
    return css.serialize(
      css.subtract(`var(${parentSizeVarName})`, css.multiply(`var(${parentGeometryPaddingVarName})`, 2)),
    );
  }
  if (defaultSize !== null) {
    return String(defaultSize);
  }
  return "auto";
}

interface TAutoPaddingInlineStylesOptions {
  padding: number | null;
  paddingVarName: string;
  sizeVarName: string;
}

/**
 * Use auto padding size based on size
 * @param options
 * @returns
 */
export function autoPaddingInlineStyles(options: TAutoPaddingInlineStylesOptions): CSSProperties {
  return assignInlineVars({
    [options.paddingVarName]: autoPaddingValue(options),
  });
}

function autoPaddingValue(options: TAutoPaddingInlineStylesOptions): string {
  const { padding, sizeVarName } = options;

  if (padding !== null) {
    return String(padding);
  }
  return css.serialize(
    css.max(
      MIN_AUTO_PADDING,
      css.roundDown(
        css.add(SIZE_PADDING_OFFSET, css.multiply(SIZE_PADDING_PITCH, `var(${sizeVarName})`)),
        QUARTER_UNIT,
      ),
    ),
  );
}
