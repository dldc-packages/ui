import clsx from "clsx";
import { contentSize } from "../common";
import { CSSProperties } from "../utils/types";
import { labelClass, labelDisabledClass } from "./label.css";

export interface LabelStylesOptions {
  disabled: boolean;
}

export function labelStyles({
  disabled = false,
}: LabelStylesOptions): [classNames: string, styles: CSSProperties] {
  const [contentClass, contentInline] = contentSize(4);

  return [
    clsx(labelClass, contentClass, disabled && labelDisabledClass),
    { ...contentInline },
  ];
}
