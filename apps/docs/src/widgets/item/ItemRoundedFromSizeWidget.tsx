import { Item } from "@dldc/ui-components/item";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemRoundedFromSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const sizes: TDesignSize[] = ["6", "8", "10", "12", "14"];
  const cols = [undefined, "autoFromSize" as const];

  const [highlighted, setHighlighted] = useState<[TDesignSize, (typeof cols)[number]] | null>(null);

  function renderElement(size: TDesignSize, col: (typeof cols)[number], key?: string) {
    return (
      <Item key={key} rounded={col} size={size} className="bg-white/5">
        Size {size}
        {col === "autoFromSize" ? ` (auto rounded)` : ""}
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted !== null
          ? printElement(renderElement(highlighted[0], highlighted[1]))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={sizes}
        columnsDims={cols}
        renderCell={({ row: rounded, column, key }) => renderElement(rounded, column, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? [cell.row, cell.column] : null)}
      />
    </div>
  );
}
