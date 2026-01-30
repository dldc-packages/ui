import { sizeToRemString } from "@dldc/ui-core/size";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CSSProperties } from "../utils/types.js";
import {
  designContentSizeClass,
  designContentSizeVar,
  designHeightClass,
  designHeightVar,
  designRoundedClass,
  designRoundedVar,
} from "./common.css";

export { designContentSizeVar, designHeightVar, designRoundedVar } from "./common.css";

export function heightStyles(height: number): [classNames: string, styles: CSSProperties] {
  return [designHeightClass, assignInlineVars({ [designHeightVar]: sizeToRemString(height) })];
}

export function roundedStyles(rounded: number): [classNames: string, styles: CSSProperties] {
  return [designRoundedClass, assignInlineVars({ [designRoundedVar]: sizeToRemString(rounded) })];
}

export function contentSize(height: number): [classNames: string, styles: CSSProperties] {
  return [designContentSizeClass, assignInlineVars({ [designContentSizeVar]: sizeToRemString(height) })];
}
