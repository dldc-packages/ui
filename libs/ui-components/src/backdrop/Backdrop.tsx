import { backdropClass } from "@dldc/ui-styles/backdrop";
import clsx from "clsx";

import { ComponentPropsBase } from "../../../react-utils/src/types";

export type BackdropProps = ComponentPropsBase<"div">;

export function Backdrop({ className, ...props }: BackdropProps) {
  return <div className={clsx(backdropClass, className)} {...props} />;
}
