import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { labelStyles } from "@dldc/ui-styles/label";
import clsx from "clsx";

export type LabelSpecificProps = { disabled?: boolean };

export type LabelProps = ComponentPropsBaseWith<"label", LabelSpecificProps>;

export function Label({ disabled = false, render, className, style, ...props }: LabelProps) {
  const [labelClass, labelInline] = labelStyles({ disabled });

  return createRender("label", render, {
    className: clsx(labelClass, className),
    style: { ...labelInline, ...style },
    ...props,
  });
}
