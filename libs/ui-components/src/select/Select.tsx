import { extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";

import { Button, buttonProps } from "../button";

export const selectProps = buttonProps;

export type SelectProps = ComponentPropsBaseWith<"select", TypeOfPropsKeys<typeof selectProps>>;

export function Select(inProps: SelectProps) {
  const [props, htmlProps] = extractProps(inProps, selectProps);
  return <Button {...props} {...(htmlProps as any)} />;
}
Select.displayName = "Select";
