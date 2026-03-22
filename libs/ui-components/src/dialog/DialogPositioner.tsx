import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { dialogPositionerStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

export interface DialogPositionerSpecificProps {
  scrollable?: boolean;
}

const dialogPositionerSpecificProps = createPropsKeys<DialogPositionerSpecificProps>({
  scrollable: null,
});

const dialogPositionerProps = mergePropsKeys(dialogPositionerSpecificProps);

export type DialogPositionerProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogPositionerProps>>;

export function DialogPositioner(inProps: DialogPositionerProps) {
  const [[localDialogPositioner], props] = extractProps(inProps, dialogPositionerProps.content);

  const { scrollable = false } = localDialogPositioner;
  const { render, className, style, children, ...htmlProps } = props;

  const [dialogPositionerClass, dialogPositionerInline] = dialogPositionerStyles();

  return createRender("div", render, {
    className: clsx(dialogPositionerClass, className),
    style: { ...dialogPositionerInline, ...style },
    children,
    ...htmlProps,
  });
}
DialogPositioner.displayName = "DialogPositioner";
