import { Input } from "@dldc/ui-components/input";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function InputHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignSize[] = ["6", "8", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Input size={highlighted} placeholder={`Height ${highlighted}`} />)
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => <Input key={key} size={height} placeholder={`Height ${height}`} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
