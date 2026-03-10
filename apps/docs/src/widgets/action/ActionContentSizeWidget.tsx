import { Action } from "@dldc/ui-components/action";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionContentSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentSizes: TDesignSize[] = ["4", "5", "6", "7", "8"];

  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action size="12" contentSize={highlighted}>
                Content {highlighted}
              </Action>,
            )
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentSizes}
        renderCell={({ row: contentSize, key }) => (
          <Action key={key} size="12" contentSize={contentSize}>
            Content {contentSize}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
