import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignSpacing } from "@dldc/ui-core/size";
import { ReactElement } from "react";

import { Action } from "../action";
import { TActionContentProps } from "../action-content";
import { TSizeProps } from "../size";
import { ComponentPropsBaseWith, mergeRender } from "../utils";
import { TDesignVariantProps } from "../variant";

export type ButtonSpecificProps = TActionContentProps &
  TSizeProps &
  TDesignVariantProps & {
    disabled?: boolean;

    spacing?: TDesignSpacing | null;
    color?: TPaletteColor;
    type?: "button" | "submit" | "reset" | undefined;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ButtonProps = ComponentPropsBaseWith<"button", ButtonSpecificProps>;

export function Button({ type = "button", disabled = false, render, ref, ...actionProps }: ButtonProps) {
  return (
    <Action
      disabled={disabled}
      render={mergeRender(render, <button type={type} ref={ref} disabled={disabled} />)}
      interactive
      {...(actionProps as any)}
    />
  );
}

Button.displayName = "Button";
