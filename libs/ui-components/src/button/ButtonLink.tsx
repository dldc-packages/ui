import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ButtonLinkProps = ComponentPropsBaseWith<
  "a",
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      render?: ReactElement;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function ButtonLink(inProps: ButtonLinkProps) {
  const { href, render, ...frameProps } = inProps;

  return <Frame {...(frameProps as any)} render={mergeRender(render, <a href={href} />)} interactive />;
}

ButtonLink.displayName = "ButtonLink";
