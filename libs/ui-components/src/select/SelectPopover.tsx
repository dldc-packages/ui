import { TDesignRounded } from "@dldc/ui-core/size";
import { selectPopoverStyles } from "@dldc/ui-styles/select";
import { clsx } from "clsx";

import { SizeContextProvider, useContainerDesignProps } from "../design-context";
import { Paper, PaperSpecificProps } from "../paper";
import { ComponentPropsBaseWith } from "../utils";

export type SelectPropoverSpecificProps = PaperSpecificProps & {
  rounded?: TDesignRounded | null;
};

export type SelectPopoverProps = ComponentPropsBaseWith<"div", SelectPropoverSpecificProps>;

export function SelectPopover(inProps: SelectPopoverProps) {
  const { className, style, background = "875", children, ...props } = inProps;

  // TODO: Migrate to Context spacing
  const { rounded, contentHeight, height, depth } = useContainerDesignProps({ rounded: inProps.rounded });

  const [popoverClass, popoverStyles] = selectPopoverStyles({ rounded });

  return (
    <Paper
      background={background}
      className={clsx(popoverClass, className)}
      style={{ ...popoverStyles, ...style }}
      {...props}
    >
      <SizeContextProvider height={height} contentHeight={contentHeight} rounded={rounded} depth={depth}>
        {children}
      </SizeContextProvider>
    </Paper>
  );
}
SelectPopover.displayName = "SelectPopover";
