import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { DialogHeader as UIComponentsDialogHeader } from "@dldc/ui-components/dialog";
import { XIcon } from "lucide-react";
import { Fragment, ReactNode } from "react";

export type DialogHeaderProps = ComponentPropsBaseWith<
  "div",
  {
    title: string | ReactNode;
    startIcon?: ReactNode;
    endAction?: ReactNode;
  }
>;

export function DialogHeader(inProps: DialogHeaderProps) {
  const { title, startIcon, endAction, ...htmlProps } = inProps;

  return (
    <UIComponentsDialogHeader
      title={<UIDialog.DialogHeading>{title}</UIDialog.DialogHeading>}
      startIcon={startIcon}
      endSlot={
        <Fragment>
          {endAction}
          <UIDialog.DialogDismiss startIcon={<XIcon />} />
        </Fragment>
      }
      {...htmlProps}
    />
  );
}
