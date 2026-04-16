import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { createContentSizeLook } from "@dldc/ui-styles/content-size";
import { createDialogHeaderLook } from "@dldc/ui-styles/dialog";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { ReactNode } from "react";

import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
import { IconSlot } from "../icon-slot";
import { DefaultPaddingProvider, usePadding } from "../padding";
import { useSize } from "../size";

export interface DialogHeaderSpecificProps {
  title: ReactNode;
  startIcon?: ReactNode;
  startSlot?: ReactNode;
  endIcon?: ReactNode;
  endSlot?: ReactNode;
}

export const dialogHeaderSpecificProps = createPropsKeys<DialogHeaderSpecificProps>({
  title: null,
  startIcon: null,
  startSlot: null,
  endIcon: null,
  endSlot: null,
});

export const dialogHeaderProps = mergePropsKeys(dialogHeaderSpecificProps, contentSizeProps);

export type DialogHeaderProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof dialogHeaderProps>>;

export function DialogHeader(inProps: DialogHeaderProps) {
  const [[localDialogHeader, localContentSize], props] = extractProps(inProps, dialogHeaderProps.content);

  const { title, startIcon, startSlot, endIcon, endSlot } = localDialogHeader;
  const { render, className, style, children, ...htmlProps } = props;

  const { paddingVarName, nextPaddingDefaultContext } = usePadding({});
  const { sizeVarName } = useSize({});
  const { contentSize, contentSizeVarName, nextContentSizeDefaultContext, parentContentSizeVarName } = useContentSize({
    contentSize: 8,
    ...localContentSize,
  });

  const dialogHeaderLook = createDialogHeaderLook();

  const contentSizeLook = createContentSizeLook({
    contentSize,
    contentSizeVarName,
    paddingVarName,
    sizeVarName,
    parentContentSizeVarName,
  });

  const content = (
    <>
      <IconSlot icon={startIcon} slot={startSlot} isItemMainIcon />
      {title}
      {children}
      <IconSlot style={{ marginLeft: "auto" }} icon={endIcon} slot={endSlot} isItemMainIcon />
    </>
  );

  return createRender(
    "div",
    render as any,
    {
      ...mergeLooks(dialogHeaderLook, contentSizeLook, look(className, style)),
      ...htmlProps,
      children: applyProviders(
        nextPaddingDefaultContext && <DefaultPaddingProvider contextValue={nextPaddingDefaultContext} />,
        nextContentSizeDefaultContext && <DefaultContentSizeProvider contextValue={nextContentSizeDefaultContext} />,
        <ParentContentSizeContextProvider contentSizeVarName={contentSizeVarName} />,
      )(content),
    } as any,
  );
}

DialogHeader.displayName = "DialogHeader";
