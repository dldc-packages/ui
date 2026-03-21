import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";

import { Action } from "../action";
import { TActionContentProps } from "../action-content";
import { TContentSizeProps } from "../content-size";
import { TPaddingProps } from "../padding";
import { TRoundedProps } from "../rounded";
import { TSizeProps } from "../size";
import { TVariantProps } from "../variant";

export type ButtonLikeSpecificProps = TActionContentProps &
  TPaddingProps &
  TRoundedProps &
  TSizeProps &
  TContentSizeProps &
  TVariantProps & {
    disabled?: boolean;
    color?: TPaletteColor;

    render?: ReactElement;
  };

export type ButtonLikeProps = ComponentPropsBaseWith<"div", ButtonLikeSpecificProps>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Action {...inProps} />;
}

ButtonLike.displayName = "ButtonLike";
