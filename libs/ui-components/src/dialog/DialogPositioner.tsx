import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogPositionerStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";
import { CSSProperties, ReactElement, ReactNode } from "react";

export interface DialogPositionerSpecificProps {
  scrollable?: boolean;
  render?: ReactElement;
  className?: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

const dialogPositionerSpecificProps = createPropsKeys<DialogPositionerSpecificProps>({
  scrollable: null,
  render: null,
  className: null,
  styles: null,
  children: null,
});

const dialogPositionerProps = mergePropsKeys(dialogPositionerSpecificProps);

export type DialogPositionerProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogPositionerProps>>;

export function DialogPositioner(inProps: DialogPositionerProps) {
  const [[localDialogPositioner], htmlProps] = extractProps(inProps, dialogPositionerProps.content);

  const { scrollable = false, render, className, styles, children } = localDialogPositioner;

  const [dialogPositionerClass, dialogPositionerInline] = dialogPositionerStyles();

  return createRender("div", render, {
    className: clsx(dialogPositionerClass, className),
    style: { ...dialogPositionerInline, ...styles },
    children,
    ...htmlProps,
  });
}
DialogPositioner.displayName = "DialogPositioner";
