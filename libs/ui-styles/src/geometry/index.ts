import { geometryPaddingVar, geometryRoundedVar } from "@dldc/ui-core/geometry";
import { sizeToRemString } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";
import { geometryRoundedClass, geometrySpacing } from "./geometry.css";

export { geometrySpacing };

export function roundedStyles(rounded: number | null): [classNames: string, styles: CSSProperties] {
  if (rounded === null || rounded === 0) {
    return ["", {}];
  }
  return [geometryRoundedClass, assignInlineVars({ [geometryRoundedVar]: sizeToRemString(rounded) })];
}

export function geometryStyles(rounded: number | null, padding: number): [classNames: string, styles: CSSProperties] {
  const [roundedClass, roundedInline] = roundedStyles(rounded);
  return [
    roundedClass,
    {
      ...roundedInline,
      ...assignInlineVars({ [geometryPaddingVar]: sizeToRemString(padding) }),
    },
  ];
}
