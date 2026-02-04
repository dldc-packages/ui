import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";

import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith, mergeRender } from "../utils";
import { TDesignVariantProps } from "../variant";

export type ButtonSpecificProps = TFrameContentProps &
  TDesignProps &
  TDesignVariantProps & {
    disabled?: boolean;

    color?: TPaletteColor;
    type?: "button" | "submit" | "reset" | undefined;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ButtonProps = ComponentPropsBaseWith<"button", ButtonSpecificProps>;

export function Button({ type = "button", disabled = false, render, ref, ...frameProps }: ButtonProps) {
  return (
    <Frame
      disabled={disabled}
      render={mergeRender(render, <button type={type} ref={ref} disabled={disabled} />)}
      interactive
      {...(frameProps as any)}
    />
  );
}

Button.displayName = "Button";
