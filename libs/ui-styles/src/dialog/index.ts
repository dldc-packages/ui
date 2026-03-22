import clsx from "clsx";

import { CSSProperties } from "../utils/types";

import {
  dialogLayoutClass,
  dialogPositionerClass,
  dialogRootClass,
  dialogRootScrollableVariantsClass,
  dialogSizeVariantsClass,
} from "./dialog.css";

export interface DialogRootStylesParams {
  scrollable: boolean;
}

export function dialogRootStyles({ scrollable }: DialogRootStylesParams): [className: string, styles: CSSProperties] {
  return [clsx(dialogRootClass, dialogRootScrollableVariantsClass[scrollable ? "scrollable" : "noScrollable"]), {}];
}

export function dialogPositionerStyles(): [className: string, styles: CSSProperties] {
  return [dialogPositionerClass, {}];
}

export interface DialogStylesParams {
  layout: boolean;
  size: "sm" | "md" | "lg" | "xl" | "full";
}

export function dialogClass({ size, layout }: DialogStylesParams): string {
  return clsx(dialogSizeVariantsClass[size], layout && dialogLayoutClass);
}
