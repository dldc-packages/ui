import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBase } from "@dldc/react-utils/types";
import { tooltipClass } from "@dldc/ui-styles/tooltip";
import clsx from "clsx";

export type TooltipProps = ComponentPropsBase<"div">;

export function Tooltip({ render, className, ...props }: TooltipProps) {
  return createRender("div", render, {
    className: clsx(tooltipClass, className),
    ...props,
  });
}
