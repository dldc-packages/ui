import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith, mergeRender } from "../utils";

export type ButtonSpecificProps = TFrameContentProps &
  TDesignProps & {
    disabled?: boolean;

    color?: TPaletteColor;
    type?: "button" | "submit" | "reset" | undefined;

    render?: ReactElement;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ButtonProps = ComponentPropsBaseWith<"button", ButtonSpecificProps & { render?: ReactElement }>;

export function Button({ type = "button", disabled = false, render, ref, ...frameProps }: ButtonProps) {
  return (
    <Frame
      type={type}
      disabled={disabled}
      ref={ref}
      render={mergeRender(render, <button disabled={disabled} />)}
      interactive
      {...frameProps}
    />
  );
}

Button.displayName = "Button";
