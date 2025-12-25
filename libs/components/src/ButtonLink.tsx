import * as Ariakit from "@ariakit/react";
import { TPaletteColor } from "@dldc/design/colors";
import { TDesignProps } from "./DesignContext";
import { Frame } from "./Frame";
import { TFrameContentProps } from "./FrameContent";
import { ComponentPropsBaseWith } from "./utils/propsTypes";

export type ButtonLinkProps = ComponentPropsBaseWith<
  "a",
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      // Forward to Button
      render?: React.ReactElement<any>;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function ButtonLink(inProps: ButtonLinkProps) {
  const { href, ...frameProps } = inProps;

  return (
    <Ariakit.Role
      href={href}
      render={<Frame render={<a />} />}
      interactive
      {...(frameProps as any)}
    />
  );
}

ButtonLink.displayName = "ButtonLink";
