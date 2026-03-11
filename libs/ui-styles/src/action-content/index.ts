import clsx from "clsx";

import {
  actionContentEndPaddingClass,
  actionContentLayoutClass,
  actionContentStartPaddingClass,
} from "./actionContent.css";

export type TActionContentPaddingModeResolved = "icon" | "text" | "none";

export interface TActionContentClassOptions {
  startPaddingMode: TActionContentPaddingModeResolved;
  endPaddingMode: TActionContentPaddingModeResolved;
  noLayout: boolean;
}

export function actionContentClass(options: TActionContentClassOptions): string {
  const { startPaddingMode, endPaddingMode, noLayout } = options;
  return clsx(
    actionContentStartPaddingClass[startPaddingMode],
    actionContentEndPaddingClass[endPaddingMode],
    !noLayout && actionContentLayoutClass,
  );
}
