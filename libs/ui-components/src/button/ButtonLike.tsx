import { TPaletteColor } from "@dldc/ui-core/colors";
import { ReactElement } from "react";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ButtonLikeSpecificProps = TFrameContentProps &
  TDesignProps & {
    disabled?: boolean;
    color?: TPaletteColor;

    render?: ReactElement;
  };

export type ButtonLikeProps = ComponentPropsBaseWith<"div", ButtonLikeSpecificProps>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Frame {...inProps} />;
}

ButtonLike.displayName = "ButtonLike";
