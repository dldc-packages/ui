import { Item } from "@dldc/ui-components/item";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemContentSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentSizes: TDesignSize[] = ["4", "5", "6", "7", "8"];

  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  function renderElement(contentSize: TDesignSize, key?: string) {
    return (
      <Item key={key} size="12" contentSize={contentSize} className="bg-white/5">
        Content {contentSize}
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentSizes}
        renderCell={({ row: contentSize, key }) => renderElement(contentSize, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
