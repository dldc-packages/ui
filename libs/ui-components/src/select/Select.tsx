import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { ButtonSpecificProps } from "../button";
import { Button } from "../button";

export type SelectSpecificProps = ButtonSpecificProps;

export type SelectProps = ComponentPropsBaseWith<"button", SelectSpecificProps>;

export function Select({ ...props }: SelectProps) {
  return <Button {...props} />;
}
Select.displayName = "Select";
