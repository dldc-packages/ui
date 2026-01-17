import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameDisabledWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = ["neutral", "blue", "green", "red", "amber", "purple"];
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<{ color: TPaletteColor; variant: TDesignVariant } | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame
                variant={highlighted.variant}
                color={highlighted.color}
                interactive
                disabled
                startIcon={<UserIcon />}
              >
                Disabled
              </Frame>,
            )
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={colors}
        renderCell={({ row: variant, column: color, key }) => (
          <Frame key={key} variant={variant} color={color} interactive disabled startIcon={<UserIcon />}>
            Disabled
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell?.column, variant: cell?.row } : null)}
      />
    </div>
  );
}
