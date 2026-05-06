import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as ADialog from "@dldc/ui-ariakit/dialog";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import { ReactElement, ReactNode } from "react";

import { DialogHeader, DialogHeaderProps } from "./DialogHeader";

import { dialogDescription, dialogFooter } from "./dialog.css";

export type DialogProps = ComponentPropsBaseWith<
  "div",
  {
    disclosure: ReactElement | string;
    title: string | ReactNode;
    startIcon?: DialogHeaderProps["startIcon"];
    size?: ADialog.DialogProps["size"];
    description?: string | ReactNode;
    actions?: ReactNode;
  }
>;

export function Dialog(inProps: DialogProps) {
  const { title, children, disclosure, size, startIcon, description, actions, ...htmlProps } = inProps;

  return (
    <ADialog.DialogProvider>
      {typeof disclosure === "string" ? <ADialog.DialogDisclosure>{disclosure}</ADialog.DialogDisclosure> : disclosure}
      <ADialog.Dialog size={size} padding="2" {...htmlProps}>
        <DialogHeader title={title} startIcon={startIcon} />
        {description && (
          <ADialog.DialogDescription className={dialogDescription}>{description}</ADialog.DialogDescription>
        )}
        {children}
        {actions && (
          <DesignWrapper size="13" padding="2x" className={dialogFooter}>
            {actions}
          </DesignWrapper>
        )}
      </ADialog.Dialog>
    </ADialog.DialogProvider>
  );
}
Dialog.displayName = "Dialog";
