import { LoadingIcon } from "@dldc/ui-components/loading-icon";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function LoadingIconStrokeWidthWidget() {
  const strokeWidths: number[] = [0.5, 1, 1.5, 2, 2.5, 3];

  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<LoadingIcon size={60} strokeWidth={highlighted} />)
          : "// Hover an icon to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        className="text-white"
        rowsDims={strokeWidths}
        renderCell={({ row: strokeWidth }) => <LoadingIcon size={60} strokeWidth={strokeWidth} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
