import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { ReactNode } from "react";
import { Merge } from "type-fest";

import { DialogHeader } from "./DialogHeader";

export type DialogProps = Merge<
  UIDialog.DialogProps,
  {
    header?: ReactNode;
    footer?: ReactNode;

    // DialogHeader props
    title: string | ReactNode;
  }
>;

export function Dialog(inProps: DialogProps) {
  const { title, children, header, ...dialogProps } = inProps;

  const resolvedHeader = header ?? <DialogHeader title={title} />;

  return (
    <UIDialog.Dialog {...dialogProps}>
      {resolvedHeader}
      {children}
    </UIDialog.Dialog>
  );
}
Dialog.displayName = "Dialog";
