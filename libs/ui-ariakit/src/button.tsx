import * as AKButton from "@ariakit/react/button";
import * as CButton from "@dldc/ui-components/button";
import { Merge } from "type-fest";

export type ButtonProps = Merge<AKButton.ButtonProps, CButton.ButtonSpecificProps>;

export function Button({ render, ...props }: ButtonProps) {
  return <AKButton.Button render={<CButton.Button render={render} />} {...props} />;
}
Button.displayName = "Button";
