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
  const [props, akProps] = extractProps(inProps, CDialog.dialogProps);
  const { children, render } = props;
  return <CDialog.Dialog render={<AKDialog.Dialog {...akProps} render={render} />} {...props} />;
}
Dialog.displayName = "Dialog";

export type DialogDismissProps = Merge<
  AKDialog.DialogDismissProps<"button">,
  TypeOfPropsKeys<typeof CButton.buttonProps>
>;
export function DialogDismiss({ render, ...props }: DialogDismissProps) {
  return <CButton.Button render={<AKDialog.DialogDismiss render={render} />} {...props} />;
}
DialogDismiss.displayName = "DialogDismiss";
