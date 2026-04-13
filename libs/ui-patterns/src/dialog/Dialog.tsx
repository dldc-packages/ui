import { createPropsKeys, extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { ReactNode } from "react";
import { Merge } from "type-fest";

import { DialogHeader } from "./DialogHeader";

export interface DialogSpecificProps {
  title: string | ReactNode;
}

export const dialogSpecificProps = createPropsKeys<DialogSpecificProps>({
  title: null,
});

export type DialogProps = Merge<UIDialog.DialogProps, TypeOfPropsKeys<typeof dialogSpecificProps>>;

export function Dialog(inProps: DialogProps) {
  const [localDialogSpecific, props] = extractProps(inProps, dialogSpecificProps);
  const { title } = localDialogSpecific;
  const { children, ...dialogProps } = props;

  return (
    <UIDialog.Dialog {...dialogProps}>
      <DialogHeader title={title} />
      {children}
    </UIDialog.Dialog>
  );
}
Dialog.displayName = "Dialog";
