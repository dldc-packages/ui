import { Action } from "@dldc/ui-components/action";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionDisabledWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = ["neutral", "blue", "green", "red", "amber", "purple"];
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<{ color: TPaletteColor; variant: TDesignVariant } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action
                variant={highlighted.variant}
                color={highlighted.color}
                interactive
                disabled
                startIcon={<UserIcon />}
              >
                Disabled
              </Action>,
            )
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={colors}
        renderCell={({ row: variant, column: color, key }) => (
          <Action key={key} variant={variant} color={color} interactive disabled startIcon={<UserIcon />}>
            Disabled
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell?.column, variant: cell?.row } : null)}
      />
    </div>
  );
}
