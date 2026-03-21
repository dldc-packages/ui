import * as AKButton from "@ariakit/react/button";
import { extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import * as CButton from "@dldc/ui-components/button";
import { Merge } from "type-fest";

export type ButtonProps = Merge<AKButton.ButtonProps, TypeOfPropsKeys<typeof CButton.buttonProps>>;

export function Button(inProps: ButtonProps) {
  const [cProps, akProps] = extractProps(inProps, CButton.buttonProps);
  return <CButton.Button render={<AKButton.Button {...akProps} />} {...cProps} />;
}
Button.displayName = "Button";
