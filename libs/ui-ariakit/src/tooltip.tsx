import * as AKTooltip from "@ariakit/react/tooltip";
import * as CTooltip from "@dldc/ui-components/tooltip";
import { Merge } from "type-fest";

export { TooltipAnchor, TooltipArrow, TooltipProvider } from "@ariakit/react/tooltip";
export type { TooltipAnchorProps, TooltipArrowProps, TooltipProviderProps } from "@ariakit/react/tooltip";

export type TooltipProps = Merge<AKTooltip.TooltipProps, CTooltip.TooltipSpecificProps>;

export function Tooltip({ render, ...props }: TooltipProps) {
  return <AKTooltip.Tooltip render={<CTooltip.Tooltip render={render} />} {...props} />;
}
