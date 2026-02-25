import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";

import { Action } from "../action";
import { TActionContentProps } from "../action-content";
import { TSizeProps } from "../size";
import { mergeRender } from "../utils/mergeRender";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TDesignVariantProps } from "../variant";

export type ButtonLinkProps = ComponentPropsBaseWith<
  "a",
  TActionContentProps &
    TSizeProps &
    TDesignVariantProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      render?: ReactElement;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function ButtonLink(inProps: ButtonLinkProps) {
  const { href, render, ...actionProps } = inProps;

  return <Action {...(actionProps as any)} render={mergeRender(render, <a href={href} />)} interactive />;
}

ButtonLink.displayName = "ButtonLink";
