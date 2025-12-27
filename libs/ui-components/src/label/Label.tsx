import { labelStyles } from "@dldc/ui-styles/label";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type LabelProps = ComponentPropsBaseWith<
  "label",
  {
    disabled?: boolean;
  }
>;

export function Label({ disabled = false, className, style, ...props }: LabelProps) {
  const [labelClass, labelInline] = labelStyles({ disabled });

  return <label className={clsx(labelClass, className)} style={{ ...labelInline, ...style }} {...props} />;
}
