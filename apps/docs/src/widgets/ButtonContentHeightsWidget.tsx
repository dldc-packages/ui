import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function ButtonContentHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentHeights: TDesignHeight[] = ["4", "6", "8", "10"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Button height="12" contentHeight={highlighted}>
                Height {highlighted}
              </Button>,
            )
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Button key={key} height="12" contentHeight={contentHeight}>
            Content Height {contentHeight}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
