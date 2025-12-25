import { backdropClass } from "@dldc/styles/backdrop";
import clsx from "clsx";
import { ComponentPropsBase } from "./utils/propsTypes.js";

export type BackdropProps = ComponentPropsBase<"div">;

export function Backdrop(inProps: BackdropProps) {
  const { className, ...props } = inProps;

  return <div className={clsx(backdropClass, className)} {...props} />;
}
