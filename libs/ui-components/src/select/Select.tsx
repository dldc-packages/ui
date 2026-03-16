import { ComponentPropsBaseWith } from "../../../react-utils/src/types";
import { Button, ButtonSpecificProps } from "../button";

export type SelectSpecificProps = ButtonSpecificProps;

export type SelectProps = ComponentPropsBaseWith<"button", SelectSpecificProps & { render?: React.ReactElement }>;

export function Select({ ...props }: SelectProps) {
  return <Button {...props} />;
}
Select.displayName = "Select";
