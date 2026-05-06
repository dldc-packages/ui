import { Action } from "@dldc/ui-components/action";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
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

  const [highlighted, setHighlighted] = useState<{ color: TPaletteColor; variant: TDesignVariant } | null>(null);

  function renderElement(color: TPaletteColor, variant: TDesignVariant, key?: string) {
    return (
      <Action key={key} color={color} variant={variant} size="7">
        {color}
      </Action>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.color, highlighted.variant))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={colors}
        renderCell={({ row: variant, column: color, key }) => renderElement(color, variant, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell.column, variant: cell.row } : null)}
      />
    </div>
  );
}
