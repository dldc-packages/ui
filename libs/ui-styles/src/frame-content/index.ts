import {
  powerSize,
  sizeToRem,
  sizeToRemString,
  TDesignSize,
} from "@dldc/ui-core/size";
import { clamp } from "@dldc/utils/math";
import { calc } from "@vanilla-extract/css-utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { designContentSizeVar, designHeightVar } from "../common/index.js";
import {
  frameContentEndPaddingClass,
  frameContentLayoutClass,
  frameContentStartPaddingClass,
  spacingGapVar,
} from "./frameContent.css.js";

export type TFrameContentPaddingResolved = "icon" | "text" | "none";

export function frameContentStyles(
  contentHeight: number,
  spacing: number | null,
  startPadding: TFrameContentPaddingResolved,
  endPadding: TFrameContentPaddingResolved,
  noLayout: boolean
): [className: string, styles: React.CSSProperties] {
  return [
    clsx(
      frameContentStartPaddingClass[startPadding],
      frameContentEndPaddingClass[endPadding],
      !noLayout && frameContentLayoutClass
    ),
    assignInlineVars({
      [designContentSizeVar]: sizeToRemString(contentHeight),
      [spacingGapVar]: spacing
        ? spacingToGapRem(spacing)
        : calc(designHeightVar)
            .subtract(designContentSizeVar)
            .divide(2)
            .toString(),
    }),
  ];
}

function spacingToGapRem(spacing: TDesignSize): string {
  const size = sizeToRem(spacing);
  const nested = sizeToRem(powerSize(size));
  const gap = (size - nested) / 2;
  const value = clamp(gap, 0, Infinity);
  return `${value}rem`;
}
