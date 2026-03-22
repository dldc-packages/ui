import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TNeutralColorShade } from "@dldc/ui-core/colors";
import { paperBaseClass, paperClass } from "@dldc/ui-styles/paper";
import clsx from "clsx";

export interface PaperBackgroundProps {
  background?: TNeutralColorShade;
}

export const paperBackgroundProps = createPropsKeys<PaperBackgroundProps>({
  background: null,
});

export const paperProps = mergePropsKeys(paperBackgroundProps);

export type PaperProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof paperProps>>;

export function Paper(inProps: PaperProps) {
  const [[localPaperBackground], props] = extractProps(inProps, paperProps.content);

  const { background } = localPaperBackground;
  const { className, render, ...htmlProps } = props;

  const paperClassResolved = background ? paperClass[background] : paperBaseClass;

  return createRender("div", render, {
    className: clsx(paperClassResolved, className),
    ...htmlProps,
  });
}
