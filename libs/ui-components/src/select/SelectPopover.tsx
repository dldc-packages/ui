import { createProps, extractAllProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { selectPopoverStyles } from "@dldc/ui-styles/select";
import { clsx } from "clsx";
import { CSSProperties, ReactElement, ReactNode } from "react";

import { GeometryPaper, geometryPaperBaseProps } from "../geometry-paper";
import { DefaultHoverVariantProvider, DefaultVariantProvider } from "../variant";

export interface SelectPopoverSpecificProps {
  render?: ReactElement;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const selectPopoverSpecificProps = createProps<SelectPopoverSpecificProps>({
  render: null,
  className: null,
  style: null,
  children: null,
});

export const selectPopoverProps = mergeProps(selectPopoverSpecificProps, ...geometryPaperBaseProps);

export type SelectPopoverProps = ComponentPropsBaseWith<"div", TPropsSplittersTypes<typeof selectPopoverProps>>;

export function SelectPopover(inProps: SelectPopoverProps) {
  const [props, htmlProps] = extractAllProps(inProps, selectPopoverProps);

  const { className, style, children, background, padding = 1, ...geometryPaperProps } = props;

  const [popoverClass, popoverStyles] = selectPopoverStyles();

  return (
    <GeometryPaper
      background={background}
      className={clsx(popoverClass, className)}
      style={{ ...popoverStyles, ...style }}
      padding={padding}
      {...geometryPaperProps}
      {...htmlProps}
    >
      <DefaultVariantProvider value="ghost">
        <DefaultHoverVariantProvider value="subtle">{children}</DefaultHoverVariantProvider>
      </DefaultVariantProvider>
    </GeometryPaper>
  );
}
SelectPopover.displayName = "SelectPopover";
