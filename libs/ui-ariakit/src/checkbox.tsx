import * as AKCheckbox from "@ariakit/react/checkbox";

export type CheckboxProps = AKCheckbox.CheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return <AKCheckbox.Checkbox {...props} />;
}
