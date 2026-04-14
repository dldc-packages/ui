import * as css from "@dldc/css-builder";
import { UNIT_IN_REM_STRING } from "@dldc/ui-core/size";
import { sizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { sizeMinSizeClass } from "./size.css";

export { sizeMinSizeClass };

export const MIN_AUTO_HEIGHT = 1;

export interface TSizeStylesOptions {
  size: null | number | "autoFromContent";
  sizeVarName: string;
  paddingVarName: string;
  parentSizeVarName: string | null;
  parentPaddingVarName: string | null;
  defaultSize: number | null;
  parentContentSizeVarName: string | null;
  contentSizeVarName: string | null;
}

export function sizeInlineStyles({
  size,
  sizeVarName,
  parentSizeVarName,
  parentPaddingVarName,
  paddingVarName,
  defaultSize,
  parentContentSizeVarName,
  contentSizeVarName,
}: TSizeStylesOptions): CSSProperties {
  return assignInlineVars({
    [sizeVarName]: css.maybeSerialize(
      sizeVarValue({
        size,
        defaultSize,
        paddingVarName,
        parentSizeVarName,
        parentPaddingVarName,
        parentContentSizeVarName,
        contentSizeVarName,
      }),
    ),
    [sizeVar]: css.serialize(css.multiply(css.var(sizeVarName), UNIT_IN_REM_STRING)),
  });
}

interface TSizeVarValueParams {
  size: null | number | "autoFromContent";
  defaultSize: number | null;
  paddingVarName: string;
  contentSizeVarName: string | null;
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
  paddingVarName,
  contentSizeVarName,
}: TSizeVarValueParams) {
  if (size === "autoFromContent") {
    // Compute size to be contentSize + padding * 2
    if (contentSizeVarName) {
      return css.add(css.var(contentSizeVarName), css.multiply(css.var(paddingVarName), 2));
    }
    // Missing args, discard size
    size = null;
  }
  if (typeof size === "number") {
    return css.number(size);
  }
  size satisfies null;
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
