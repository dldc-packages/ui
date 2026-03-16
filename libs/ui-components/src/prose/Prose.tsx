import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { proseStyles, TProseColor } from "@dldc/ui-styles/prose";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import { ComponentPropsBaseWith } from "../../../react-utils/src/types";

export type ProseProps = ComponentPropsBaseWith<
  "div",
  {
    color?: TProseColor;
    invert?: boolean;
    size?: TDesignSize;
  }
>;

export function Prose({ color, invert, className, size = 7, ...props }: ProseProps) {
  const proseClass = proseStyles({ color, invert });
  return (
    <div
      className={clsx(proseClass, className)}
      style={size ? assignInlineVars({ [contentSizeVar]: sizeToRemString(size) }) : undefined}
      {...props}
    />
  );
}
