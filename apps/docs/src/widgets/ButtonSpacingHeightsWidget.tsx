import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function ButtonSpacingHeightsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignHeight[] = ["6", "8", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
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
