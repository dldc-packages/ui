import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogClass } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

import { GeometryPaper, geometryPaperBaseProps } from "../geometry-paper";
import { htmlBaseProps, renderProps } from "../props";
import { DialogPositioner } from "./DialogPositioner";
import { DialogRoot } from "./DialogRoot";
import { dialogSizeProps } from "./dialogSizeProps";

export interface DialogSpecificProps {
  noLayout?: boolean;
}

export const dialogSpecificProps = createPropsKeys<DialogSpecificProps>({
  noLayout: null,
});

export const dialogProps = mergePropsKeys(
  htmlBaseProps,
  renderProps,
  dialogSizeProps,
  dialogSpecificProps,
  geometryPaperBaseProps,
);

export type DialogProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogProps>>;

export function Dialog(inProps: DialogProps) {
  const [[localHtmlBase, localRender, localDialogSize, localDialogSpecific, localGeometryPaper], htmlProps] =
    extractProps(inProps, dialogProps.content);

  const { noLayout = false } = localDialogSpecific;
  const { className, style, children } = localHtmlBase;
  const { render } = localRender;
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
