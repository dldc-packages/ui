import * as css from "@dldc/css-builder";
import { UNIT_IN_REM_STRING } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { MIN_AUTO_HEIGHT } from "../size";
import { CSSProperties } from "../utils/types";

import { contentSizeLineHeightClass } from "./contentSize.css";

export { contentSizeLineHeightClass };

interface TContentSizeInlineStylesOptions {
  contentSizeVarName: string;
  contentSize: number | null;
  paddingVarName: string;
  sizeVarName: string;
}

export function contentSizeInlineStyles({
  contentSizeVarName,
  contentSize,
  paddingVarName,
  sizeVarName,
}: TContentSizeInlineStylesOptions): CSSProperties {
  return assignInlineVars({
    [contentSizeVarName]: css.maybeSerialize(contentSizeVarValue({ contentSize, paddingVarName, sizeVarName })),
    [contentSizeVar]: css.serialize(css.multiply(css.var(contentSizeVarName), UNIT_IN_REM_STRING)),
  });
}

interface TContentSizeVarValueParams {
  contentSize: number | null;
  sizeVarName: string;
  paddingVarName: string;
}

function contentSizeVarValue({ contentSize, sizeVarName, paddingVarName }: TContentSizeVarValueParams) {
  if (contentSize !== null) {
    return css.number(contentSize);
  }
  // Auto compute from size and padding
  return css.max(MIN_AUTO_HEIGHT, css.subtract(css.var(sizeVarName), css.multiply(css.var(paddingVarName), 2)));
}
