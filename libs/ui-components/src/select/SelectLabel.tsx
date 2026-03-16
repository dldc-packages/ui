import { ComponentPropsBaseWith } from "../../../react-utils/src/types";
import { Label, LabelSpecificProps } from "../label";

export type SelectLabelSpecificProps = LabelSpecificProps;

export type SelectLabelProps = ComponentPropsBaseWith<"label", SelectLabelSpecificProps>;

export function SelectLabel({ ...props }: SelectLabelProps) {
  return <Label {...props} />;
}
SelectLabel.displayName = "SelectLabel";
