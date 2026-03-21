import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { tooltipClass } from "@dldc/ui-styles/tooltip";
import clsx from "clsx";
import { ReactElement } from "react";

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
