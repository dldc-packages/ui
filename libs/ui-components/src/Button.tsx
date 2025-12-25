import { TPaletteColor } from "../../ui-core/dist/colors";
import { TDesignProps } from "./DesignContext";
import { Frame } from "./Frame";
import { TFrameContentProps } from "./FrameContent";
import { ComponentPropsBaseWith } from "./utils/propsTypes";

export type ButtonProps = ComponentPropsBaseWith<
  "button",
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;
      type?: "button" | "submit" | "reset" | undefined;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function Button(inProps: ButtonProps) {
  const { type = "button", disabled = false, ref, ...frameProps } = inProps;

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
