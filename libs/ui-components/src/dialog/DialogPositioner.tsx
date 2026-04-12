import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBase } from "@dldc/react-utils/types";
import { dialogPositionerStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

export type DialogPositionerProps = ComponentPropsBase<"div">;

export function DialogPositioner(props: DialogPositionerProps) {
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
