import { createRender } from "@dldc/react-utils/create-render";
import { labelStyles } from "@dldc/ui-styles/label";
import clsx from "clsx";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";

export type LabelSpecificProps = { disabled?: boolean; render?: React.ReactElement };

export type LabelProps = ComponentPropsBaseWith<"label", LabelSpecificProps>;

export function Label({ disabled = false, render, className, style, ...props }: LabelProps) {
  const [labelClass, labelInline] = labelStyles({ disabled });

  return createRender("label", render, {
    className: clsx(labelClass, className),
    style: { ...labelInline, ...style },
    ...props,
  });
}
