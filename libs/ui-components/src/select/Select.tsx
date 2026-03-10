import { Button, ButtonSpecificProps } from "../button";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type SelectSpecificProps = ButtonSpecificProps;

export type SelectProps = ComponentPropsBaseWith<"button", SelectSpecificProps & { render?: React.ReactElement }>;

export function Select({ ...props }: SelectProps) {
  return <Button {...props} />;
}
Select.displayName = "Select";
