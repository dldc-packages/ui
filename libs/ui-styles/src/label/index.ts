import clsx from "clsx";
import { contentSize } from "../common";
import { labelClass, labelDisabledClass } from "./label.css";

interface LabelStylesOptions {
  disabled: boolean;
}

export function labelStyles({
  disabled = false,
}: LabelStylesOptions): [classNames: string, styles: React.CSSProperties] {
  const [contentClass, contentInline] = contentSize(4);

  return [
    clsx(labelClass, contentClass, disabled && labelDisabledClass),
    { ...contentInline },
  ];
}
