import { useState } from "react";

import { Frame } from "@dldc/ui-components/frame";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameContentHeightWidget() {
  const contentHeights: TDesignHeight[] = ["4", "5", "6", "7", "8"];

  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame height="12" contentHeight={highlighted}>
                Content {highlighted}
              </Frame>,
            )
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Frame key={key} height="12" contentHeight={contentHeight}>
            Content {contentHeight}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
