import { Button } from "@dldc/ui-components/button";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ButtonContentSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentSizes: TDesignSize[] = ["4", "6", "8", "10"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  function renderElem(contentSize: TDesignSize, key?: string) {
    return (
      <Button key={key} size="12" contentSize={contentSize}>
        Content Size {contentSize}
      </Button>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElem(highlighted)) : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentSizes}
        renderCell={({ row: contentSize, key }) => renderElem(contentSize, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
