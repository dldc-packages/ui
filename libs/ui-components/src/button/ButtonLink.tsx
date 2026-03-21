import { createRender } from "@dldc/react-utils/create-render";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";

import { Action } from "../action";
import { TActionContentProps } from "../action-content";
import { TContentSizeProps } from "../content-size";
import { TPaddingProps } from "../padding";
import { TRoundedProps } from "../rounded";
import { TSizeProps } from "../size";
import { TVariantProps } from "../variant";

export type ButtonLinkProps = ComponentPropsBaseWith<
  "a",
  TActionContentProps &
    TPaddingProps &
    TRoundedProps &
    TSizeProps &
    TContentSizeProps &
    TVariantProps & {
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

  return <Action {...(actionProps as any)} interactive render={createRender("a", render, { href })} />;
}

ButtonLink.displayName = "ButtonLink";
