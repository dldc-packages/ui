import type { TDesignHeight } from "@dldc/ui-core/size";

import { Action } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionHeightWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignHeight[] = ["6", "7", "8", "9", "10", "11", "12"];

  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Action height={highlighted}>Height {highlighted}</Action>)
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => (
          <Action key={key} height={height}>
            Height {height}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
