import type { TDesignVariant } from "@dldc/ui-core/variants";

import { Action } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionVariantsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<TDesignVariant | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Action variant={highlighted}>{highlighted}</Action>)
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: variant, key }) => (
          <Action key={key} variant={variant} interactive>
            {variant}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
