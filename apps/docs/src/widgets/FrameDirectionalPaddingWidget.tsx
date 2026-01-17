import { useState } from "react";

import { Frame } from "@dldc/ui-components/frame";
import type { TFrameContentPaddingResolved } from "@dldc/ui-styles/frame-content";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameDirectionalPaddingWidget() {
  const paddings: TFrameContentPaddingResolved[] = ["text", "icon", "none"];
  const propName = ["startPadding", "endPadding"];

  const [highlighted, setHighlighted] = useState<{
    padding: TFrameContentPaddingResolved;
    propName: (typeof propName)[number];
  } | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Frame {...{ [highlighted.propName]: highlighted.padding }}>Text</Frame>)
          : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        columnsDims={propName}
        renderCell={({ row: padding, column: propName, key }) => (
          <Frame key={key} {...{ [propName]: padding }}>
            Text
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { padding: cell.row, propName: cell.column } : null)}
      />
    </div>
  );
}
