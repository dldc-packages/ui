import { contentSize } from "@dldc/ui-styles/common";
import { proseStyles, TProseColor } from "@dldc/ui-styles/prose";
import clsx from "clsx";

import { ComponentPropsBaseWith } from "../utils/propsTypes";

export type ProseProps = ComponentPropsBaseWith<
  "div",
  {
    color?: TProseColor;
    invert?: boolean;
    size?: number;
  }
>;

export function Prose({ color, invert, className, size, ...props }: ProseProps) {
  const [contentSizeClass, contentSizeInline] = size ? contentSize(size) : ["", {}];
  const proseClass = proseStyles({ color, invert });
  return <div className={clsx(proseClass, contentSizeClass, className)} style={contentSizeInline} {...props} />;
}
