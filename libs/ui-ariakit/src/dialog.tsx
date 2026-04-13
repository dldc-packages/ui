import * as AKDialog from "@ariakit/react/dialog";
import { extractProps, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { Backdrop } from "@dldc/ui-components/backdrop";
import * as CButton from "@dldc/ui-components/button";
import * as CDialog from "@dldc/ui-components/dialog";
import * as CTypography from "@dldc/ui-components/typography";
import { Merge } from "type-fest";

export type { DialogProviderProps } from "@ariakit/react/dialog";

export const DialogProvider: React.ComponentType<AKDialog.DialogProviderProps> = AKDialog.DialogProvider;
DialogProvider.displayName = "DialogProvider";

export type DialogDescriptionProps = Merge<
  AKDialog.DialogDescriptionProps<"div">,
  TypeOfPropsKeys<typeof CTypography.typographyProps>
>;
export function DialogDescription(inProps: DialogDescriptionProps) {
  const [cProps, akProps] = extractProps(inProps, CTypography.typographyProps);
  return <CTypography.Typography {...cProps} render={<AKDialog.DialogDescription {...akProps} />} />;
}
DialogDescription.displayName = "DialogDescription";

export type DialogHeadingProps = Merge<
  AKDialog.DialogHeadingProps<"div">,
  TypeOfPropsKeys<typeof CTypography.typographyProps>
>;
export function DialogHeading(inProps: DialogHeadingProps) {
  const [cProps, akProps] = extractProps(inProps, CTypography.typographyProps);
  return (
    <CTypography.Typography
      contentSize="6"
      fontWeight="semibold"
      {...cProps}
      render={<AKDialog.DialogHeading {...akProps} />}
    />
  );
}
DialogHeading.displayName = "DialogHeading";

export type DialogDisclosureProps = Merge<
  AKDialog.DialogDisclosureProps<"button">,
  TypeOfPropsKeys<typeof CButton.buttonProps>
>;
export function DialogDisclosure(inProps: DialogDisclosureProps) {
  const [cProps, { children, ...akProps }] = extractProps(inProps, CButton.buttonProps);
  return <CButton.Button {...cProps} render={<AKDialog.DialogDisclosure {...akProps} />} children={children} />;
}
DialogDisclosure.displayName = "DialogDisclosure";

export type DialogProps = Merge<AKDialog.DialogProps, TypeOfPropsKeys<typeof CDialog.dialogProps>>;
export function Dialog(inProps: DialogProps) {
  const [cProps, { children, ...akProps }] = extractProps(inProps, CDialog.dialogProps);
  return (
    <CDialog.Dialog render={<AKDialog.Dialog backdrop={<Backdrop />} {...akProps} />} {...cProps} children={children} />
  );
}
Dialog.displayName = "Dialog";

export type DialogDismissProps = Merge<
  AKDialog.DialogDismissProps<"button">,
  TypeOfPropsKeys<typeof CButton.buttonProps>
>;
export function DialogDismiss(inProps: DialogDismissProps) {
  const [cProps, { children, ...akProps }] = extractProps(inProps, CButton.buttonProps);
  return <CButton.Button {...cProps} render={<AKDialog.DialogDismiss {...akProps} />} children={children} />;
}
DialogDismiss.displayName = "DialogDismiss";
