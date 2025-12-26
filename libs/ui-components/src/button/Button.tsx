import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ButtonSpecificProps = TFrameContentProps &
  TDesignProps & {
    disabled?: boolean;

    color?: TPaletteColor;
    type?: "button" | "submit" | "reset" | undefined;

    // Data attributes
    "data-hover"?: boolean;
    "data-focus-visible"?: boolean;
  };

export type ButtonProps = ComponentPropsBaseWith<"button", ButtonSpecificProps>;

export function Button({ type = "button", disabled = false, ref, ...frameProps }: ButtonProps) {
  return (
    <Frame
      type={type}
      disabled={disabled}
      ref={ref}
      render={<button disabled={disabled} />}
      interactive
      {...frameProps}
    />
  );
}

Button.displayName = "Button";
