import { tooltipClass } from "@dldc/ui-styles/tooltip";
import clsx from "clsx";
import { ReactElement } from "react";

import { createRender } from "../utils";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type TooltipSpecificProps = {
  render?: ReactElement;
};

export type TooltipProps = ComponentPropsBaseWith<"div", TooltipSpecificProps>;

export function Tooltip({ render, className, ...props }: TooltipProps) {
  return createRender("div", render, {
    className: clsx(tooltipClass, className),
    ...props,
  });
}
