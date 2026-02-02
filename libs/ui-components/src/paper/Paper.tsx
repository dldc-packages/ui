import { TNeutralColorShade } from "@dldc/ui-core/colors";
import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "../utils/propsTypes.js";
import { ReactElement } from "react";
import { mergeRender } from "../utils/mergeRender.js";

export type PaperSpecificProps = {
  render?: ReactElement;
  background?: TNeutralColorShade;
};

export type PaperProps = ComponentPropsBaseWith<"div", PaperSpecificProps>;

export function Paper(inProps: PaperProps) {
  const { className, background, render, ...props } = inProps;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return mergeRender(render, <div className={clsx(paperClassResolved, className)} {...props} />);
}
