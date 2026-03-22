import { extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { selectPopoverStyles } from "@dldc/ui-styles/select";
import { clsx } from "clsx";

import { GeometryPaper, geometryPaperProps } from "../geometry-paper";
import { DefaultHoverVariantProvider, DefaultVariantProvider } from "../variant";

export const selectPopoverProps = mergePropsKeys(geometryPaperProps);

export type SelectPopoverProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof selectPopoverProps>>;

export function SelectPopover(inProps: SelectPopoverProps) {
  const [[localGeometryPaper], props] = extractProps(inProps, selectPopoverProps.content);

  const { background, padding = 1, ...geometryPaperProps } = localGeometryPaper;
  const { className, style, children, render, ...htmlProps } = props;

  const [popoverClass, popoverStyles] = selectPopoverStyles();

  return (
    <GeometryPaper
      background={background}
      className={clsx(popoverClass, className)}
      style={{ ...popoverStyles, ...style }}
      padding={padding}
      {...geometryPaperProps}
      {...htmlProps}
      render={render}
    >
      <DefaultVariantProvider value="ghost">
        <DefaultHoverVariantProvider value="subtle">{children}</DefaultHoverVariantProvider>
      </DefaultVariantProvider>
    </GeometryPaper>
  );
}
SelectPopover.displayName = "SelectPopover";
