import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";
import { TNeutralColorShade } from "../../ui-core/dist/colors/index.js";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

export type PaperProps = ComponentPropsBaseWith<
  "div",
  {
    background?: TNeutralColorShade;
  }
>;

export function Paper(inProps: PaperProps) {
  const { className, background, ...props } = inProps;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return <div className={clsx(paperClassResolved, className)} {...props} />;
}
