import * as Ariakit from "@ariakit/react";
import { TPaletteColor } from "@dldc/design/colors";
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

      // Forward to Button
      render?: Ariakit.ButtonProps["render"];

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function Button(inProps: ButtonProps) {
  const {
    type = "button",
    render,
    disabled = false,
    ref,
    ...frameProps
  } = inProps;

  return (
    <Ariakit.Button
      type={type}
      disabled={disabled}
      ref={ref}
      render={
        <Frame
          disabled={disabled}
          render={render ?? <button />}
          interactive
          {...frameProps}
        />
      }
    />
  );
}

Button.displayName = "Button";
