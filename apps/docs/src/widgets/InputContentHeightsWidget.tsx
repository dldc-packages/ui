import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function InputContentHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentHeights: TDesignHeight[] = ["6", "7", "8", "9"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
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
