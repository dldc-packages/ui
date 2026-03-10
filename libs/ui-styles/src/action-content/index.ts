import clsx from "clsx";

import { CSSProperties } from "../utils/types";

import {
  actionContentEndPaddingClass,
  actionContentLayoutClass,
  actionContentStartPaddingClass,
} from "./actionContent.css";

export type TActionContentPaddingModeResolved = "icon" | "text" | "none";

export interface TActionContentStylesOptions {
  startPaddingMode: TActionContentPaddingModeResolved;
  endPaddingMode: TActionContentPaddingModeResolved;
  noLayout: boolean;
}

export function actionContentStyles(options: TActionContentStylesOptions): [className: string, styles: CSSProperties] {
  const { startPaddingMode, endPaddingMode, noLayout } = options;
  return [
    clsx(
      actionContentStartPaddingClass[startPaddingMode],
      actionContentEndPaddingClass[endPaddingMode],
      !noLayout && actionContentLayoutClass,
    ),
    {},
  ];
}
