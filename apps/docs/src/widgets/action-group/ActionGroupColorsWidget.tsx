import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { HouseIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ActionGroupColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = ["blue", "green", "red", "orange", "purple", "gray"];
  const variants: TDesignVariant[] = ["solid", "surface"];

  const [highlighted, setHighlighted] = useState<{
    color: TPaletteColor;
    variant: TDesignVariant;
  } | null>();

  function renderElement(color: TPaletteColor, variant: TDesignVariant, key?: string) {
    return (
      <ActionGroup key={key} variant={variant} color={color}>
        <Button startIcon={<HouseIcon />}>Home</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </ActionGroup>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.color, highlighted.variant), {
              replacePropsRaw: { children: "{/* ... */}" },
            })
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={colors}
        columnsDims={variants}
        renderCell={({ row: color, column: variant, key }) => renderElement(color, variant, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { color: cell.row, variant: cell.column } : null)}
      />
    </div>
  );
}
