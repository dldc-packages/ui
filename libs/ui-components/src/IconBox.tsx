import { iconStyles } from "@dldc/ui-styles/icon";
import clsx from "clsx";
import { TDesignHeight } from "../../ui-core/dist/size/index.js";
import { ComponentPropsBaseWith } from "./utils/propsTypes.js";

export type IconBoxProps = ComponentPropsBaseWith<
  "div",
  {
    icon: React.ReactNode;
    alt?: string;
    color?: string;
    size?: TDesignHeight;
  }
>;

export function IconBox(props: IconBoxProps) {
  const {
    icon,
    // alt, color,
    size,
    className,
    style,
    ...htmlProps
  } = props;

  const [iconClas, inlineStyles] = iconStyles(size);

  return (
    <div className={clsx(iconClas, className)} style={{ ...inlineStyles, ...style }} {...htmlProps}>
      {icon}
    </div>
  );
}

IconBox.displayName = "IconBox";
