import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogRootStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";
import { CSSProperties, ReactElement, ReactNode } from "react";

export interface DialogRootSpecificProps {
  scrollable?: boolean;
  render?: ReactElement;
  className?: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

const dialogRootSpecificProps = createPropsKeys<DialogRootSpecificProps>({
  scrollable: null,
  render: null,
  className: null,
  styles: null,
  children: null,
});

const dialogRootProps = mergePropsKeys(dialogRootSpecificProps);

export type DialogRootProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogRootProps>>;

export function DialogRoot(inProps: DialogRootProps) {
  const [[localDialogRoot], htmlProps] = extractProps(inProps, dialogRootProps.content);

  const { scrollable = false, render, className, styles, children } = localDialogRoot;

  const [dialogRootClass, dialogRootInline] = dialogRootStyles({ scrollable });

  return createRender("div", render, {
    className: clsx(dialogRootClass, className),
    style: { ...dialogRootInline, ...styles },
    children,
    ...htmlProps,
  });
}
DialogRoot.displayName = "DialogRoot";
