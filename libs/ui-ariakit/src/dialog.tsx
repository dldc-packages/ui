import * as AKDialog from "@ariakit/react/dialog";
import { extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import * as CButton from "@dldc/ui-components/button";
import * as CDialog from "@dldc/ui-components/dialog";
import { Merge } from "type-fest";

export { DialogDescription, DialogDisclosure, DialogHeading, DialogProvider } from "@ariakit/react/dialog";
export type {
  DialogDescriptionProps,
  DialogDisclosureProps,
  DialogHeadingProps,
  DialogProviderProps,
} from "@ariakit/react/dialog";

export type DialogProps = Merge<AKDialog.DialogProps, TypeOfPropsKeys<typeof CDialog.dialogProps>>;
export function Dialog(inProps: DialogProps) {
  const [cProps, akProps] = extractProps(inProps, CDialog.dialogProps);
  return <CDialog.Dialog {...cProps} render={<AKDialog.Dialog {...akProps} />} />;
}
Dialog.displayName = "Dialog";

export type DialogDismissProps = Merge<
  AKDialog.DialogDismissProps<"button">,
  TypeOfPropsKeys<typeof CButton.buttonProps>
>;
export function DialogDismiss(inProps: DialogDismissProps) {
  const [cProps, akProps] = extractProps(inProps, CButton.buttonProps);
  return <CButton.Button {...cProps} render={<AKDialog.DialogDismiss {...akProps} />} />;
}
DialogDismiss.displayName = "DialogDismiss";
