import { createRender } from "@dldc/react-utils/create-render";
import { createPropsKeys, extractProps, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";

import { Action } from "../action";
import { actionContentProps } from "../action-content";
import { contentSizeProps } from "../content-size";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
import { variantProps } from "../variant";

export interface ButtonLinkSpecificProps {
  disabled?: boolean;

  color?: TPaletteColor;

  // Data attributes
  "data-hover"?: boolean;
  "data-focus-visible"?: boolean;
}

export const buttonLinkSpecificProps = createPropsKeys<ButtonLinkSpecificProps>({
  "data-focus-visible": null,
  "data-hover": null,
  color: null,
  disabled: null,
});

export const buttonLinkProps = mergePropsKeys(
  buttonLinkSpecificProps,
  actionContentProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
  sizeProps,
  variantProps,
);

export type ButtonLinkProps = ComponentPropsBaseWith<"a", TypeOfPropsKeys<typeof buttonLinkProps>>;

export function ButtonLink(inProps: ButtonLinkProps) {
  const [localButton, props] = extractProps(inProps, buttonLinkProps);

  const { disabled = false, ...actionProps } = localButton;
  const { className, style, children, render, ref, ...htmlProps } = props;

  return <Action {...actionProps} disabled={disabled} interactive render={createRender("a", render, htmlProps)} />;
}

ButtonLink.displayName = "ButtonLink";
