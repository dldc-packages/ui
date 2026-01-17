import { Input } from "@dldc/ui-components/input";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function InputContentHeightsWidget() {
  const contentHeights: TDesignHeight[] = ["6", "7", "8", "9"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Input height="10" contentHeight={highlighted} placeholder={`Content height ${highlighted}`} />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Input key={key} height="10" contentHeight={contentHeight} placeholder={`Content height ${contentHeight}`} />
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
