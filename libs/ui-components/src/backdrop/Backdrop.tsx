import { ComponentPropsBase } from "@dldc/react-utils/types";
import { createBackdropLook } from "@dldc/ui-styles/backdrop";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

export type BackdropProps = ComponentPropsBase<"div">;

export function Backdrop({ className, style, ...props }: BackdropProps) {
  const backdropLook = createBackdropLook();

  return <div {...mergeLooks(backdropLook, look(className, style))} {...props} />;
}
