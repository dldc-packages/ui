import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createLabelLook } from "@dldc/ui-styles/label";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

export type LabelSpecificProps = { disabled?: boolean };

export type LabelProps = ComponentPropsBaseWith<"label", LabelSpecificProps>;

export function Label({ disabled = false, render, className, style, ...props }: LabelProps) {
  const labelLook = createLabelLook({ disabled });

  return createRender("label", render, {
    ...mergeLooks(labelLook, look(className, style)),
    ...props,
  });
}
