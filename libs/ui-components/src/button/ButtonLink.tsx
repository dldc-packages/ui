import { TPaletteColor } from "@dldc/ui-core/colors";
import { TDesignProps } from "../design-context";
import { Frame } from "../frame";
import { TFrameContentProps } from "../frame-content";
import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ButtonLinkProps = ComponentPropsBaseWith<
  "a",
  TFrameContentProps &
    TDesignProps & {
      disabled?: boolean;

      color?: TPaletteColor;

      // Data attributes
      "data-hover"?: boolean;
      "data-focus-visible"?: boolean;
    }
>;

export function ButtonLink(inProps: ButtonLinkProps) {
  const { href, ...frameProps } = inProps;

  return <Frame {...frameProps} render={<a href={href} />} interactive />;
}

ButtonLink.displayName = "ButtonLink";
