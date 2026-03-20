import * as AKButton from "@ariakit/react/button";
import { extractAllProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import * as CButton from "@dldc/ui-components/button";
import { Merge } from "type-fest";

export type ButtonProps = Merge<AKButton.ButtonProps, TPropsSplittersTypes<typeof CButton.buttonProps>>;

export function Button(inProps: ButtonProps) {
  const [cProps, akProps] = extractAllProps(inProps, CButton.buttonProps);
  return <CButton.Button render={<AKButton.Button {...akProps} />} {...cProps} />;
}
Button.displayName = "Button";
