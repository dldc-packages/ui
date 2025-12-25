import { TPaletteColor } from "@dldc/design/colors";
import { TDesignProps } from "./DesignContext";
import { Frame } from "./Frame";
import { TFrameContentProps } from "./FrameContent";
import { ComponentPropsBaseWith } from "./utils/propsTypes";

export type ButtonLikeProps = ComponentPropsBaseWith<
  "div",
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;
    }
>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Frame {...inProps} />;
}

ButtonLike.displayName = "ButtonLike";
