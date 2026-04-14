import { applyProviders } from "@dldc/react-utils/apply-providers";
import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { contentSizeInlineStyles, contentSizeLineHeightClass } from "@dldc/ui-styles/content-size";
import { dialogHeaderStyles } from "@dldc/ui-styles/dialog";
import clsx from "clsx";
import { ReactNode } from "react";

import { IconSlot } from "../action-content";
import {
  contentSizeProps,
  DefaultContentSizeProvider,
  ParentContentSizeContextProvider,
  useContentSize,
} from "../content-size";
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

  const [dialogHeaderClass, dialogHeaderInline] = dialogHeaderStyles();

  const layoutInline = contentSizeInlineStyles({
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
      className: clsx(contentSizeLineHeightClass, dialogHeaderClass, className),
      style: { ...layoutInline, ...dialogHeaderInline, ...style },
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
