import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBase } from "@dldc/react-utils/types";
import { createDialogPositionerLook } from "@dldc/ui-styles/dialog";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

export type DialogPositionerProps = ComponentPropsBase<"div">;

export function DialogPositioner(props: DialogPositionerProps) {
  const { render, className, style, children, ...htmlProps } = props;

  const dialogPositionerLook = createDialogPositionerLook();

  return createRender("div", render, {
    ...mergeLooks(dialogPositionerLook, look(className, style)),
    children,
    ...htmlProps,
  });
}
DialogPositioner.displayName = "DialogPositioner";
