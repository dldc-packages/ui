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

export type ButtonSpecificProps = TActionContentProps &
  TPaddingProps &
  TRoundedProps &
  TSizeProps &
  TContentSizeProps &
  TVariantProps & {
    disabled?: boolean;

    color?: TPaletteColor;
    type?: "button" | "submit" | "reset" | undefined;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ButtonProps = ComponentPropsBaseWith<
  "button",
  ButtonSpecificProps & {
    render?: ReactElement;
  }
>;

export function Button({ type = "button", disabled = false, render, ref, ...actionProps }: ButtonProps) {
  return (
    <Action
      disabled={disabled}
      render={createRender("button", render, { type, ref, disabled })}
      interactive
      {...(actionProps as any)}
    />
  );
}

Button.displayName = "Button";
