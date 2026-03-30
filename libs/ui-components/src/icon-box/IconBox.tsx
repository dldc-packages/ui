import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TDesignSize } from "@dldc/ui-core/size";
import { iconStyles } from "@dldc/ui-styles/icon";
import clsx from "clsx";

export type IconBoxProps = ComponentPropsBaseWith<
  "div",
  {
    icon: React.ReactNode;
    alt?: string;
    color?: string;
    size?: TDesignSize;
    inline?: boolean;
  }
>;

export function IconBox(props: IconBoxProps) {
  const {
    icon,
    // alt, color,
    size,
    className,
    style,
    inline = false,
    ...htmlProps
  } = props;

  const [iconClas, inlineStyles] = iconStyles(size, inline);

  return (
    <div className={clsx(iconClas, className)} style={{ ...inlineStyles, ...style }} {...htmlProps}>
      {icon}
    </div>
  );
}

IconBox.displayName = "IconBox";
