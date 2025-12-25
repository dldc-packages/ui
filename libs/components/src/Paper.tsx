import { TNeutralColorShade } from "@dldc/design/colors";
import { paperBaseClass, paperClass } from "@dldc/styles/paper";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

export type PaperProps = ComponentPropsBaseWith<
  "div",
  {
    background?: TNeutralColorShade;
  }
>;

export function Paper(inProps: PaperProps) {
  const { className, style, background, ...props } = inProps;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return <div className={clsx(paperClassResolved, className)} {...props} />;
}
