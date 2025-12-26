import * as AKButton from "@ariakit/react/button";
import * as CButton from "@dldc/ui-components/Button";
import { Merge } from "type-fest";

export type ButtonProps = Merge<AKButton.ButtonProps, CButton.ButtonSpecificProps>;

export function Button({ render = <CButton.Button />, ...props }: ButtonProps) {
  return <AKButton.Button render={render} {...props} />;
}
