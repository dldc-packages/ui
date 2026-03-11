import * as css from "@dldc/css-builder";
import { UNIT_IN_REM_STRING } from "@dldc/ui-core/size";
import { sizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { sizeMinSizeClass } from "./size.css";

export { sizeMinSizeClass };

export const MIN_AUTO_HEIGHT = 1;

export interface TSizeStylesOptions {
  size: number | null;
  sizeVarName: string;
  parentSizeVarName: string | null;
  parentPaddingVarName: string | null;
  defaultSize: number | null;
  parentContentSizeVarName: string | null;
}

export function sizeInlineStyles({
  size,
  sizeVarName,
  parentSizeVarName,
  parentPaddingVarName,
  defaultSize,
  parentContentSizeVarName,
}: TSizeStylesOptions): CSSProperties {
  return assignInlineVars({
    [sizeVarName]: css.maybeSerialize(
      sizeVarValue({
        size,
        defaultSize,
        parentSizeVarName,
        parentPaddingVarName,
        parentContentSizeVarName,
      }),
    ),
    [sizeVar]: css.serialize(css.multiply(css.var(sizeVarName), UNIT_IN_REM_STRING)),
  });
}

interface TSizeVarValueParams {
  size: number | null;
  defaultSize: number | null;
  parentSizeVarName: string | null;
  parentPaddingVarName: string | null;
  parentContentSizeVarName: string | null;
}

function sizeVarValue({
  size,
  defaultSize,
  parentContentSizeVarName,
  parentSizeVarName,
  parentPaddingVarName,
}: TSizeVarValueParams) {
  if (size !== null) {
    return css.number(size);
  }
  // If we have a parent content size we use it as size
  if (parentContentSizeVarName) {
    return css.var(parentContentSizeVarName);
  }
  // If for some reason we don't have content size but we have parent size and padding, we can compute size from them
  if (parentSizeVarName && parentPaddingVarName) {
    return css.max(
      MIN_AUTO_HEIGHT,
      css.subtract(css.var(parentSizeVarName), css.multiply(css.var(parentPaddingVarName), 2)),
    );
  }
  if (defaultSize !== null) {
    return css.number(defaultSize);
  }
  return undefined;
}
