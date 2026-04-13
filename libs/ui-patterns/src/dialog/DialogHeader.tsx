import { createPropsKeys, extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { ActionNestedContent } from "@dldc/ui-components/action";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";

export interface DialogHeaderSpecificProps {
  title: string | ReactNode;
  startIcon?: ReactNode;
}

export const dialogHeaderProps = createPropsKeys<DialogHeaderSpecificProps>({
  title: null,
  startIcon: null,
});

export type DialogHeaderProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogHeaderProps>>;

export function DialogHeader(inProps: DialogHeaderProps) {
  const [localDialogHeaderSpecific, props] = extractProps(inProps, dialogHeaderProps);
  const { title, startIcon } = localDialogHeaderSpecific;
  const { children, render, ...htmlProps } = props;

  return (
    <ActionNestedContent startIcon={startIcon} {...htmlProps}>
      <UIDialog.DialogHeading>{title}</UIDialog.DialogHeading>
      <UIDialog.DialogDismiss startIcon={<XIcon />} />
    </ActionNestedContent>
  );

  // return createRender("div", render, {
  //   ...htmlProps,
  //   children: (

  //   )
  // });
}
