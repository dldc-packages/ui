import { createRender } from "@dldc/react-utils/create-render";
import { createProps, extractProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { TNeutralColorShade } from "@dldc/ui-core/colors";
import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";
import { ReactElement } from "react";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";

export interface PaperBackgroundProps {
  background?: TNeutralColorShade;
}

export const paperBackgroundProps = createProps<PaperBackgroundProps>({
  background: null,
});

export const paperBaseProps = mergeProps(paperBackgroundProps);

export interface PaperSpecificProps {
  render?: ReactElement;
  className?: string;
}

export const paperSpecificProps = createProps<PaperSpecificProps>({
  render: null,
  className: null,
});

export const paperProps = mergeProps(...paperBaseProps, paperSpecificProps);

export type PaperProps = ComponentPropsBaseWith<"div", TPropsSplittersTypes<typeof paperProps>>;

export function Paper(inProps: PaperProps) {
  const [[localPaperBackground, localPaperSpecific], htmlProps] = extractProps(inProps, paperProps);

  const { background } = localPaperBackground;
  const { className, render } = localPaperSpecific;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return createRender("div", render, {
    className: clsx(paperClassResolved, className),
    ...htmlProps,
  });
}
