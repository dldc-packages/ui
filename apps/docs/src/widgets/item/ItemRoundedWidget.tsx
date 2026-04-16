import { Item } from "@dldc/ui-components/item";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemRoundedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const roundedValues: TDesignRounded[] = ["0", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>(null);

  function renderElement(rounded: TDesignRounded, key?: string) {
    return (
      <Item key={key} rounded={rounded} size="10" className="bg-white/5">
        Rounded {rounded}
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted !== null ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedValues}
        renderCell={({ row: rounded, key }) => renderElement(rounded, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
