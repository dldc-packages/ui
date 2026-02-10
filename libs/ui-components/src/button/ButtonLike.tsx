import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";

import { Action } from "../action";
import { TActionContentProps } from "../action-content";
import { TDesignProps } from "../design-context";
import { TGeometryProps } from "../geometry";
import { ComponentPropsBaseWith } from "../utils/propsTypes";
import { TDesignVariantProps } from "../variant";

export type ButtonLikeSpecificProps = TActionContentProps &
  TGeometryProps &
  TDesignProps &
  TDesignVariantProps & {
    disabled?: boolean;
    color?: TPaletteColor;

    render?: ReactElement;
  };

export type ButtonLikeProps = ComponentPropsBaseWith<"div", ButtonLikeSpecificProps>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Action {...inProps} />;
}

ButtonLike.displayName = "ButtonLike";
