import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as ADialog from "@dldc/ui-ariakit/dialog";
import * as CDialog from "@dldc/ui-components/dialog";
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
    <CDialog.DialogHeader
      title={<ADialog.DialogHeading>{title}</ADialog.DialogHeading>}
      startIcon={startIcon}
      endSlot={
        <Fragment>
          {endAction}
          <ADialog.DialogDismiss startIcon={<XIcon />} variant="ghost" />
        </Fragment>
      }
      {...htmlProps}
    />
  );
}
