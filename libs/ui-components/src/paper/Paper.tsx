import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TNeutralColorShade } from "@dldc/ui-core/colors";
import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";
import { ReactElement } from "react";

export interface PaperBackgroundProps {
  background?: TNeutralColorShade;
}

export const paperBackgroundProps = createPropsKeys<PaperBackgroundProps>({
  background: null,
});

export const paperBaseProps = mergePropsKeys(paperBackgroundProps);

export interface PaperSpecificProps {
  render?: ReactElement;
  className?: string;
}

export const paperSpecificProps = createPropsKeys<PaperSpecificProps>({
  render: null,
  className: null,
});

export const paperProps = mergePropsKeys(...paperBaseProps.content, paperSpecificProps);

export type PaperProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof paperProps>>;

export function Paper(inProps: PaperProps) {
  const [[localPaperBackground, localPaperSpecific], htmlProps] = extractProps(inProps, paperProps.content);

  const { background } = localPaperBackground;
  const { className, render } = localPaperSpecific;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return createRender("div", render, {
    className: clsx(paperClassResolved, className),
    ...htmlProps,
  });
}
