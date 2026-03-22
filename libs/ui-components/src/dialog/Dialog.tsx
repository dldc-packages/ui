import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogClass } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

import { GeometryPaper, geometryPaperProps } from "../geometry-paper";
import { DialogPositioner } from "./DialogPositioner";
import { DialogRoot } from "./DialogRoot";
import { dialogSizeProps } from "./dialogSizeProps";

export interface DialogLayoutProps {
  noLayout?: boolean;
}

export const dialogLayoutProps = createPropsKeys<DialogLayoutProps>({
  noLayout: null,
});

export const dialogProps = mergePropsKeys(dialogSizeProps, dialogLayoutProps, geometryPaperProps);

export type DialogProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogProps>>;

export function Dialog(inProps: DialogProps) {
  const [[localDialogSize, localDialogLayout, localGeometryPaper], props] = extractProps(inProps, dialogProps.content);

  const { noLayout = false } = localDialogLayout;
  const { className, style, children, render, ...htmlProps } = props;
  const { size = "md" } = localDialogSize;
  const { background = "925", padding = 4, rounded = 5, ...geometryPaperProps } = localGeometryPaper;

  const dialogClassname = dialogClass({ size, layout: !noLayout });

  return (
    <DialogRoot scrollable>
      <DialogPositioner>
        <GeometryPaper
          className={clsx(dialogClassname, className)}
          style={style}
          background={background}
          rounded={rounded}
          padding={padding}
          render={render}
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
