import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function ButtonSpacingHeightsWidget() {
  const heights: TDesignHeight[] = ["6", "8", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Button spacing="8" height={highlighted}>
                Height {highlighted}
              </Button>,
            )
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => (
          <Button key={key} height={height} spacing="8">
            Height {height}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
