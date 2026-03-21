import { ComponentPropsBase } from "@dldc/react-utils/types";
import { backdropClass } from "@dldc/ui-styles/backdrop";
import clsx from "clsx";

export type BackdropProps = ComponentPropsBase<"div">;

export function Backdrop({ className, ...props }: BackdropProps) {
  return <div className={clsx(backdropClass, className)} {...props} />;
}
