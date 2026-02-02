import { labelStyles } from "@dldc/ui-styles/label";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { mergeRender } from "../utils";

export type LabelSpecificProps = { disabled?: boolean; render?: React.ReactElement };

export type LabelProps = ComponentPropsBaseWith<"label", LabelSpecificProps>;

export function Label({ disabled = false, render, className, style, ...props }: LabelProps) {
  const [labelClass, labelInline] = labelStyles({ disabled });

  return mergeRender(
    render,
    <label className={clsx(labelClass, className)} style={{ ...labelInline, ...style }} {...props} />,
  );
}
