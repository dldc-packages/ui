import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";
import { Frame, type FrameProps } from "@dldc/ui-components/frame";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
  ];
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<FrameProps | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame color={highlighted.color} variant={highlighted.variant}>
                {highlighted.color}
              </Frame>,
            )
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={colors}
        renderCell={({ row: variant, column: color, key }) => (
          <Frame key={key} variant={variant} color={color} height="7">
            {color}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell?.column, variant: cell?.row } : null)}
      />
    </div>
  );
}
