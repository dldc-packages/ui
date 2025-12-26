import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

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
