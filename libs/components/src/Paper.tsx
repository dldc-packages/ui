import { sigil, TSigilAny } from "@dldc/css-engine/sigil";
import { TNeutralColorShade } from "@dldc/design/colors";
import { paperBaseClass, paperClass } from "@dldc/styles/paper";
import clsx from "clsx";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

export type PaperProps = ComponentPropsBaseWith<
  "div",
  {
    sigils?: TSigilAny;
    background?: TNeutralColorShade;
  }
>;

export function Paper(inProps: PaperProps) {
  const { className, style, sigils, background, ...props } = inProps;

  const resSigil = sigil(sigils, { style, className });

  const paperClassResolved = background
    ? paperClass[background]
    : paperBaseClass;

  return (
    <div
      className={clsx(paperClassResolved, className)}
      {...resSigil}
      {...props}
    />
  );
}
