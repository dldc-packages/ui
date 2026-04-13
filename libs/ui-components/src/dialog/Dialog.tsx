import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogClass } from "@dldc/ui-styles/dialog";
import clsx from "clsx";
import { ReactElement } from "react";

import { GeometryPaper, geometryPaperProps } from "../geometry-paper";
import { DialogPositioner } from "./DialogPositioner";
import { DialogRoot } from "./DialogRoot";
import { dialogScrollableProps } from "./dialogScrollableProps";
import { dialogSizeProps } from "./dialogSizeProps";

export interface DialogLayoutProps {
  noLayout?: boolean;
  renderPaper?: ReactElement;
}

export const dialogLayoutProps = createPropsKeys<DialogLayoutProps>({
  noLayout: null,
  renderPaper: null,
});

export const dialogProps = mergePropsKeys(
  dialogSizeProps,
  dialogScrollableProps,
  dialogLayoutProps,
  geometryPaperProps,
);

export type DialogProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogProps>>;

export function Dialog(inProps: DialogProps) {
  const [[localDialogSize, localDialogScrollable, localDialogLayout, localGeometryPaper], props] = extractProps(
    inProps,
    dialogProps.content,
  );

  const { noLayout = false } = localDialogLayout;
  const { scrollable = true } = localDialogScrollable;
  const { className, style, children, render, renderPaper, ...htmlProps } = props;
  const { size = "md" } = localDialogSize;
  const { background = "925", padding = 4, rounded = 5, ...geometryPaperProps } = localGeometryPaper;

  const dialogClassname = dialogClass({ size, layout: !noLayout });

  return (
    <DialogRoot scrollable={scrollable} render={render}>
      <DialogPositioner>
        <GeometryPaper
          className={clsx(dialogClassname, className)}
          style={style}
          background={background}
          rounded={rounded}
          padding={padding}
          render={renderPaper}
          {...geometryPaperProps}
          {...htmlProps}
        >
          {children}
        </GeometryPaper>
      </DialogPositioner>
    </DialogRoot>
  );
}
Dialog.displayName = "Dialog";
