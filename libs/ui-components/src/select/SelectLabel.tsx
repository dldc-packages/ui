import { Label, LabelSpecificProps } from "../label";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type SelectLabelSpecificProps = LabelSpecificProps;

export type SelectLabelProps = ComponentPropsBaseWith<"label", SelectLabelSpecificProps>;

export function SelectLabel({ ...props }: SelectLabelProps) {
  return <Label {...props} />;
}
SelectLabel.displayName = "SelectLabel";
