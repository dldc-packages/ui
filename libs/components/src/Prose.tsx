import { proseStyles, TProseColor } from "@dldc/styles/prose";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "./utils/propsTypes";

export type ProseProps = ComponentPropsBaseWith<
  "div",
  {
    color?: TProseColor;
    invert?: boolean;
  }
>;

export function Prose(inProps: ProseProps) {
  const { color, invert, className, ...props } = inProps;

  const proseClass = proseStyles({ color, invert });

  return <div className={clsx(proseClass, className)} {...props} />;
}
