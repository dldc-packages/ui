import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as ADialog from "@dldc/ui-ariakit/dialog";
import { ReactElement, ReactNode } from "react";

import { DialogHeader, DialogHeaderProps } from "./DialogHeader";

export type DialogProps = ComponentPropsBaseWith<
  "div",
  {
    disclosure: ReactElement | string;
    title: string | ReactNode;
    startIcon?: DialogHeaderProps["startIcon"];
    size?: ADialog.DialogProps["size"];
  }
>;

export function Dialog(inProps: DialogProps) {
  const { title, children, disclosure, size, startIcon, ...htmlProps } = inProps;

  return (
    <ADialog.DialogProvider>
      {typeof disclosure === "string" ? <ADialog.DialogDisclosure>{disclosure}</ADialog.DialogDisclosure> : disclosure}
      <ADialog.Dialog size={size} {...htmlProps}>
        <DialogHeader title={title} startIcon={startIcon} />
        {children}
      </ADialog.Dialog>
    </ADialog.DialogProvider>
  );
}
Dialog.displayName = "Dialog";
