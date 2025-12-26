import * as BaseButton from "@base-ui/react/button";
import * as CButton from "@dldc/ui-components/button";
import { Merge } from "type-fest";

export type ButtonProps = Merge<BaseButton.ButtonProps, CButton.ButtonSpecificProps>;
export type ButtonState = BaseButton.ButtonState;

export function Button({ render = <CButton.Button />, ...props }: ButtonProps) {
  return <BaseButton.Button render={render} {...props} />;
}
