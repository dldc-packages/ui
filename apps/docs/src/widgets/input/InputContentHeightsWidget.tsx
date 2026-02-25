import { Input } from "@dldc/ui-components/input";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function InputContentHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentHeights: TDesignSize[] = ["6", "7", "8", "9"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Input
                size="10"
                // TODO
                // contentHeight={highlighted}
                placeholder={`Content size ${highlighted}`}
              />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Input
            key={key}
            size="10"
            // TODO
            // contentHeight={contentHeight}
            placeholder={`Content size ${contentHeight}`}
          />
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
