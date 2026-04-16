import clsx from "clsx";

import { look, TLook } from "../utils/look";

import {
  dialogFooterClass,
  dialogHeaderClass,
  dialogLayoutClass,
  dialogPositionerClass,
  dialogRootClass,
  dialogRootScrollableVariantsClass,
  dialogSizeVariantsClass,
} from "./dialog.css";

export interface TCreateDialogRootLookParams {
  scrollable: boolean;
}

export function createDialogRootLook({ scrollable }: TCreateDialogRootLookParams): TLook {
  return look(clsx(dialogRootClass, dialogRootScrollableVariantsClass[scrollable ? "scrollable" : "noScrollable"]));
}

export function createDialogPositionerLook(): TLook {
  return look(dialogPositionerClass);
}

export interface TCreateDialogLookParams {
  layout: boolean;
  size: "sm" | "md" | "lg" | "xl" | "full";
}

export function createDialogLook({ size, layout }: TCreateDialogLookParams): TLook {
  return look(clsx(dialogSizeVariantsClass[size], layout && dialogLayoutClass));
}

export function createDialogHeaderLook(): TLook {
  return look(dialogHeaderClass);
}

export function createDialogFooterLook(): TLook {
  return look(dialogFooterClass);
}
