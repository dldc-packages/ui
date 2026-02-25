import { Action } from "@dldc/ui-components/action";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionHeightWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignSize[] = ["6", "7", "8", "9", "10", "11", "12"];

  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Action size={highlighted}>Height {highlighted}</Action>)
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: size, key }) => (
          <Action key={key} size={size}>
            Height {size}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
