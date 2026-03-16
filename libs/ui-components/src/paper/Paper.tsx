import { createRender } from "@dldc/react-utils/create-render";
import { TNeutralColorShade } from "@dldc/ui-core/colors";
import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";
import { ReactElement } from "react";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";

export type PaperSpecificProps = {
  background?: TNeutralColorShade;
};

export type PaperProps = ComponentPropsBaseWith<
  "div",
  PaperSpecificProps & {
    render?: ReactElement;
  }
>;

export function Paper(inProps: PaperProps) {
  const { className, background, render, ...props } = inProps;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return createRender("div", render, {
    className: clsx(paperClassResolved, className),
    ...props,
  });
}
