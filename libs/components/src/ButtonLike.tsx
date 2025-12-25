import * as Ariakit from "@ariakit/react";
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

      // Forward to Element
      render?: Ariakit.RoleProps["render"];
    }
>;

export function ButtonLike(inProps: ButtonLikeProps) {
  return <Ariakit.Role render={<Frame {...(inProps as any)} />} />;
}

ButtonLike.displayName = "ButtonLike";
