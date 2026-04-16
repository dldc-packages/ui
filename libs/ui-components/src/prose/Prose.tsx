import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import { sizeToRemString, TDesignSize } from "@dldc/ui-core/size";
import { contentSizeVar } from "@dldc/ui-core/variables";
import { createProseLook, TProseColor } from "@dldc/ui-styles/prose";
import { look, mergeLooks } from "@dldc/ui-styles/utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export type ProseProps = ComponentPropsBaseWith<
  "div",
  {
    color?: TProseColor;
    invert?: boolean;
    size?: TDesignSize;
  }
>;

export function Prose({ color, invert, className, style, size = 7, ...props }: ProseProps) {
  const proseLook = createProseLook({ color, invert });
  return (
    <div
      {...mergeLooks(
        proseLook,
        look(null, size ? assignInlineVars({ [contentSizeVar]: sizeToRemString(size) }) : undefined),
        look(className, style),
      )}
      {...props}
    />
  );
}
