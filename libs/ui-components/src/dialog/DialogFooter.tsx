import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBase } from "@dldc/react-utils/types";
import { createDialogFooterLook } from "@dldc/ui-styles/dialog";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

export type DialogFooterProps = ComponentPropsBase<"div">;

export function DialogFooter(props: DialogFooterProps) {
  const { render, className, style, children, ...htmlProps } = props;

  const dialogFooterLook = createDialogFooterLook();

  return createRender("div", render, {
    ...mergeLooks(dialogFooterLook, look(className, style)),
    children,
    ...htmlProps,
  });
}
DialogFooter.displayName = "DialogFooter";
