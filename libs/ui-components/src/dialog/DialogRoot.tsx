import { createRender } from "@dldc/react-utils/create-render";
import { extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createDialogRootLook } from "@dldc/ui-styles/dialog";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

import { dialogScrollableProps } from "./dialogScrollableProps";

const dialogRootProps = mergePropsKeys(dialogScrollableProps);

export type DialogRootProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogRootProps>>;

export function DialogRoot(inProps: DialogRootProps) {
  const [[localDialogRoot], props] = extractProps(inProps, dialogRootProps.content);

  const { scrollable = false } = localDialogRoot;
  const { render, className, style, children, ...htmlProps } = props;

  const dialogRootLook = createDialogRootLook({ scrollable });

  return createRender("div", render, {
    ...mergeLooks(dialogRootLook, look(className, style)),
    children,
    ...htmlProps,
  });
}
DialogRoot.displayName = "DialogRoot";
