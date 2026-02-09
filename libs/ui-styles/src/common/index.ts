import { sizeToRemString } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { CSSProperties } from "../utils/types";
import { designContentSizeClass, designContentSizeVar, designHeightClass, designHeightVar, layer } from "./common.css";

export { designContentSizeVar, designHeightVar, layer };

export function heightStyles(height: number): [classNames: string, styles: CSSProperties] {
  return [designHeightClass, assignInlineVars({ [designHeightVar]: sizeToRemString(height) })];
}

export function contentSize(height: number): [classNames: string, styles: CSSProperties] {
  return [designContentSizeClass, assignInlineVars({ [designContentSizeVar]: sizeToRemString(height) })];
}
