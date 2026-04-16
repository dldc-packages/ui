import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";

import { Action } from "../action";
import { contentSizeProps } from "../content-size";
import { itemContentProps } from "../item-content";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
import { variantProps } from "../variant";

export interface ButtonSpecificProps {
  disabled?: boolean;

  color?: TPaletteColor;
  type?: "button" | "submit" | "reset" | undefined;

  // Data attributes
  "data-hover"?: boolean;
  "data-focus-visible"?: boolean;
}

export const buttonSpecificProps = createPropsKeys<ButtonSpecificProps>({
  "data-focus-visible": null,
  "data-hover": null,
  color: null,
  disabled: null,
  type: null,
});

export const buttonProps = mergePropsKeys(
  buttonSpecificProps,
  itemContentProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
  sizeProps,
  variantProps,
);

export type ButtonProps = ComponentPropsBaseWith<"button", TypeOfPropsKeys<typeof buttonProps>>;

export function Button(inProps: ButtonProps) {
  const [localButton, props] = extractProps(inProps, buttonProps);

  const { type = "button", disabled = false, ...actionProps } = localButton;
  const { render, ref, children, ...htmlProps } = props;

  return (
    <Action
      disabled={disabled}
      render={createRender("button", render, { type, ref, disabled })}
      interactive
      {...actionProps}
      {...(htmlProps as any)}
    >
      {children}
    </Action>
  );
}

Button.displayName = "Button";
