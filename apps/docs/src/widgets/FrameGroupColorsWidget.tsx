import type { TPaletteColor } from "@dldc/ui-core/colors";

import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { HouseIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function FrameGroupColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = ["blue", "green", "red", "orange", "purple", "gray"];
  const variants = [
    { label: "Solid", variant: "solid" as const },
    { label: "Surface", variant: "surface" as const },
  ];

  const [highlighted, setHighlighted] = useState<{
    color: TPaletteColor;
    variant: (typeof variants)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<FrameGroup variant="${highlighted.variant.variant}" color="${highlighted.color}">
  {/* Button children */}
</FrameGroup>`
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={colors}
        columnsDims={variants}
        renderCell={({ row: color, column: variant, key }) => (
          <FrameGroup key={key} variant={variant.variant} color={color}>
            <Button startIcon={<HouseIcon />}>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </FrameGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell.row, variant: cell.column } : null)}
      />
    </div>
  );
}
