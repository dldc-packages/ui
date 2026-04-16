import clsx from "clsx";

import { look, TLook } from "../utils/look";

import { itemContentEndPaddingClass, itemContentLayoutClass, itemContentStartPaddingClass } from "./itemContent.css";

export type TItemContentPaddingModeResolved = "icon" | "text" | "none";

export interface TCreateItemContentLookParams {
  startPaddingMode: TItemContentPaddingModeResolved;
  endPaddingMode: TItemContentPaddingModeResolved;
  noLayout: boolean;
}

export function createItemContentLook(options: TCreateItemContentLookParams): TLook {
  const { startPaddingMode, endPaddingMode, noLayout } = options;
  return look(
    clsx(
      itemContentStartPaddingClass[startPaddingMode],
      itemContentEndPaddingClass[endPaddingMode],
      !noLayout && itemContentLayoutClass,
    ),
  );
}
