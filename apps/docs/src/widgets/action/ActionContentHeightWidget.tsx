import type { TDesignHeight } from "@dldc/ui-core/size";

import { Action } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionContentHeightWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentHeights: TDesignHeight[] = ["4", "5", "6", "7", "8"];

  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action height="12" contentHeight={highlighted}>
                Content {highlighted}
              </Action>,
            )
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentHeights}
        renderCell={({ row: contentHeight, key }) => (
          <Action key={key} height="12" contentHeight={contentHeight}>
            Content {contentHeight}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
