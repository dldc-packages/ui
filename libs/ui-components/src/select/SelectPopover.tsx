import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
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

export const selectPopoverSpecificProps = createPropsKeys<SelectPopoverSpecificProps>({
  render: null,
  className: null,
  style: null,
  children: null,
});

export const selectPopoverProps = mergePropsKeys(selectPopoverSpecificProps, geometryPaperBaseProps);

export type SelectPopoverProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof selectPopoverProps>>;

export function SelectPopover(inProps: SelectPopoverProps) {
  const [props, htmlProps] = extractProps(inProps, selectPopoverProps);

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
