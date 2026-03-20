import { createRender } from "@dldc/react-utils/create-render";
import { createProps, extractAllProps, mergeProps, TPropsSplittersTypes } from "@dldc/react-utils/props-splitters";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { CSSProperties, ReactElement, ReactNode, Ref } from "react";

import { Action } from "../action";
import { actionContentProps } from "../action-content";
import { contentSizeProps } from "../content-size";
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

  children?: ReactNode;
  style?: CSSProperties;
  className?: string;

  ref?: Ref<HTMLButtonElement>;
  render?: ReactElement;
}

export const buttonSpecificProps = createProps<ButtonSpecificProps>({
  "data-focus-visible": null,
  "data-hover": null,
  color: null,
  disabled: null,
  type: null,
  children: null,
  style: null,
  className: null,
  ref: null,
  render: null,
});

export const buttonProps = mergeProps(
  buttonSpecificProps,
  actionContentProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
  sizeProps,
  variantProps,
);

export type ButtonProps = ComponentPropsBaseWith<"button", TPropsSplittersTypes<typeof buttonProps>>;

export function Button(inProps: ButtonProps) {
  const [props, htmlProps] = extractAllProps(inProps, buttonProps);

  const { type = "button", disabled = false, render, ref, ...actionProps } = props;

  return (
    <Action
      disabled={disabled}
      render={createRender("button", render, { type, ref, disabled })}
      interactive
      {...actionProps}
      {...(htmlProps as any)}
    />
  );
}

Button.displayName = "Button";
