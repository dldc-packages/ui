import * as AKButton from "@ariakit/react/button";
import * as CButton from "@dldc/ui-components/button";
import { ReactElement } from "react";
import { Merge } from "type-fest";

export type ButtonProps = Merge<AKButton.ButtonProps, CButton.ButtonSpecificProps & { render?: ReactElement }>;

export function Button({ render, ...props }: ButtonProps) {
  return <CButton.Button render={<AKButton.Button render={render} />} {...props} />;
}
Button.displayName = "Button";
