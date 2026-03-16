import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { selectPopoverStyles } from "@dldc/ui-styles/select";
import { clsx } from "clsx";
import { ReactElement } from "react";

import { GeometryPaper } from "../geometry-paper";
import { PaperSpecificProps } from "../paper";
import { TRoundedProps } from "../rounded";
import { DefaultHoverVariantProvider, DefaultVariantProvider } from "../variant";

export type SelectPopoverSpecificProps = PaperSpecificProps & TRoundedProps;

export type SelectPopoverProps = ComponentPropsBaseWith<
  "div",
  SelectPopoverSpecificProps & {
    render?: ReactElement;
  }
>;

export function SelectPopover(inProps: SelectPopoverProps) {
  const { className, style, background = "875", children, render, ...props } = inProps;

  const [popoverClass, popoverStyles] = selectPopoverStyles();

  return (
    <GeometryPaper
      background={background}
      className={clsx(popoverClass, className)}
      style={{ ...popoverStyles, ...style }}
      render={render}
      padding={1}
      {...props}
    >
      <DefaultVariantProvider value="ghost">
        <DefaultHoverVariantProvider value="subtle">{children}</DefaultHoverVariantProvider>
      </DefaultVariantProvider>
    </GeometryPaper>
  );
}
SelectPopover.displayName = "SelectPopover";
