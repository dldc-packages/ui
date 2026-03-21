import { extractAllProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";
import { Button, buttonProps } from "../button";

export const selectProps = buttonProps;

export type SelectProps = ComponentPropsBaseWith<"select", TPropsSplittersTypes<typeof selectProps>>;

export function Select(inProps: SelectProps) {
  const [props, htmlProps] = extractAllProps(inProps, selectProps);
  return <Button {...props} {...(htmlProps as any)} />;
}
Select.displayName = "Select";
