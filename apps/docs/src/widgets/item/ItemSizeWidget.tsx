import { Item } from "@dldc/ui-components/item";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const sizes: TDesignSize[] = ["6", "7", "8", "9", "10", "11", "12"];

  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  function renderElement(size: TDesignSize, key?: string) {
    return (
      <Item key={key} size={size} className="bg-white/5">
        Size {size}
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={sizes}
        renderCell={({ row: size, key }) => renderElement(size, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
