import { useState } from "react";

import { Input } from "@dldc/ui-components/input";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function InputHeightsWidget() {
  const heights: TDesignHeight[] = ["6", "8", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Input height={highlighted} placeholder={`Height ${highlighted}`} />)
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => <Input key={key} height={height} placeholder={`Height ${height}`} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
