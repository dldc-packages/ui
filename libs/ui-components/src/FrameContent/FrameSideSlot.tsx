import { CSSProperties, ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { IconBox } from "../IconBox.js";
import { LoadingIcon } from "../LoadingIcon.js";

type FrameSideSlotProps = {
  /**
   * If slot is defined, it takes precedence over all other props.
   */
  slot?: ReactNode;

  icon?: ReactNode;
  loading?: boolean;
  isItemMainIcon?: boolean;
  isIconOnly?: boolean;
  style?: CSSProperties;
  className?: string;
};

export function FrameSideSlot(props: FrameSideSlotProps) {
  const { slot, icon, loading, isItemMainIcon, isIconOnly, style, className } = props;

  if (slot) {
    return <Fragment>{slot}</Fragment>;
  }

  if (icon || loading) {
    return (
      <IconBox
        data-item-main-icon={isItemMainIcon && !isIconOnly ? "true" : undefined}
        icon={loading ? <LoadingIcon /> : icon}
        className={className}
        style={style}
      />
    );
  }

  return null;
}

FrameSideSlot.displayName = "FrameSideSlot";
