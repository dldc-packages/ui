import { createPropsKeys, mergePropsKeys, TypeOfPropsKeys } from "@dldc/react-utils/props-keys";
import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";

import { Action } from "../action";
import { contentSizeProps } from "../content-size";
import { itemContentProps } from "../item-content";
import { paddingProps } from "../padding";
import { roundedProps } from "../rounded";
import { sizeProps } from "../size";
import { variantProps } from "../variant";

export interface ButtonLikeSpecificProps {
  disabled?: boolean;
  color?: TPaletteColor;
}

export const buttonLikeSpecificProps = createPropsKeys<ButtonLikeSpecificProps>({
  color: null,
  disabled: null,
});

export const buttonLikeProps = mergePropsKeys(
  buttonLikeSpecificProps,
  itemContentProps,
  contentSizeProps,
  paddingProps,
  roundedProps,
  sizeProps,
  variantProps,
);

export type ButtonLikeProps = ComponentPropsBaseWith<"div", TypeOfPropsKeys<typeof buttonLikeProps>>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Action {...inProps} />;
}

ButtonLike.displayName = "ButtonLike";
