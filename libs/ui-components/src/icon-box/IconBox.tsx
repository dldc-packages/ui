import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { TDesignSize } from "@dldc/ui-core/size";
import { createIconLook } from "@dldc/ui-styles/icon";
import { look, mergeLooks } from "@dldc/ui-styles/utils";

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

  const iconLook = createIconLook({ size, inline });

  return (
    <div {...mergeLooks(iconLook, look(className, style))} {...htmlProps}>
      {icon}
    </div>
  );
}

IconBox.displayName = "IconBox";
