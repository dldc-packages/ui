import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function ButtonContentHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentHeights: TDesignSize[] = ["4", "6", "8", "10"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Button
                size="12"
                // TODO
                // contentHeight={highlighted}
              >
                Height {highlighted}
              </Button>,
            )
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Button
            key={key}
            size="12"
            // TODO
            // contentHeight={contentHeight}
          >
            Content Height {contentHeight}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
