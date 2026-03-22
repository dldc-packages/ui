import * as AKTooltip from "@ariakit/react/tooltip";
import * as CTooltip from "@dldc/ui-components/tooltip";

export { TooltipAnchor, TooltipArrow, TooltipProvider } from "@ariakit/react/tooltip";
export type { TooltipAnchorProps, TooltipArrowProps, TooltipProviderProps } from "@ariakit/react/tooltip";

export type TooltipProps = AKTooltip.TooltipProps;

export function Tooltip({ render, ...akProps }: TooltipProps) {
  return <CTooltip.Tooltip render={<AKTooltip.Tooltip {...akProps} />} />;
}
Tooltip.displayName = "Tooltip";
