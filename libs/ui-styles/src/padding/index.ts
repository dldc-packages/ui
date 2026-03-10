import * as css from "@dldc/css-builder";
import { UNIT_IN_REM } from "@dldc/ui-core/size";
import { paddingVar } from "@dldc/ui-core/variables";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";

import { paddingSpacing } from "./padding.css";

export { paddingSpacing, paddingVar };

export interface TPaddingInlineStylesOptions {
  paddingVarName: string;
  padding: number | null;
  defaultPadding: number;
}

export function paddingInlineStyles(options: TPaddingInlineStylesOptions): CSSProperties {
  const { paddingVarName, padding, defaultPadding } = options;

  return assignInlineVars({
    [paddingVarName]: String(padding ?? defaultPadding),
    [paddingVar]: css.serialize(css.multiply(`var(${paddingVarName})`, UNIT_IN_REM)),
  });
}
