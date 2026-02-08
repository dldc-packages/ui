import { powerSize, sizeToRem, sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { clamp } from "@dldc/utils/math";
import { calc } from "@vanilla-extract/css-utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { designContentSizeVar, designHeightVar } from "../common/index";
import { CSSProperties } from "../utils/types";
import {
  actionContentEndPaddingClass,
  actionContentLayoutClass,
  actionContentStartPaddingClass,
  layer,
  spacingGapVar,
} from "./actionContent.css";

export { layer };

export type TActionContentPaddingResolved = "icon" | "text" | "none";

export function actionContentStyles(
  contentHeight: number,
  spacing: number | null,
  startPadding: TActionContentPaddingResolved,
  endPadding: TActionContentPaddingResolved,
  noLayout: boolean,
): [className: string, styles: CSSProperties] {
  return [
    clsx(
      actionContentStartPaddingClass[startPadding],
      actionContentEndPaddingClass[endPadding],
      !noLayout && actionContentLayoutClass,
    ),
    assignInlineVars({
      [designContentSizeVar]: sizeToRemString(contentHeight),
      [spacingGapVar]: spacing
        ? spacingToGapRem(spacing)
        : calc(designHeightVar).subtract(designContentSizeVar).divide(2).toString(),
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
