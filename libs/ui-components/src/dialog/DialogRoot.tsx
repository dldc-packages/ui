import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogRootStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

export interface DialogRootSpecificProps {
  scrollable?: boolean;
}

const dialogRootSpecificProps = createPropsKeys<DialogRootSpecificProps>({
  scrollable: null,
});

const dialogRootProps = mergePropsKeys(dialogRootSpecificProps);

export type DialogRootProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogRootProps>>;

export function DialogRoot(inProps: DialogRootProps) {
  const [[localDialogRoot], props] = extractProps(inProps, dialogRootProps.content);

  const { scrollable = false } = localDialogRoot;
  const { render, className, style, children, ...htmlProps } = props;

  const [dialogRootClass, dialogRootInline] = dialogRootStyles({ scrollable });

  return createRender("div", render, {
    className: clsx(dialogRootClass, className),
    style: { ...dialogRootInline, ...style },
    children,
    ...htmlProps,
  });
}
DialogRoot.displayName = "DialogRoot";
