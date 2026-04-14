import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBase } from "@dldc/react-utils/types";
import { dialogFooterStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";

export type DialogFooterProps = ComponentPropsBase<"div">;

export function DialogFooter(props: DialogFooterProps) {
  const { render, className, style, children, ...htmlProps } = props;

  const [dialogFooterClass, dialogFooterInline] = dialogFooterStyles();

  return createRender("div", render, {
    className: clsx(dialogFooterClass, className),
    style: { ...dialogFooterInline, ...style },
    children,
    ...htmlProps,
  });
}
DialogFooter.displayName = "DialogFooter";
