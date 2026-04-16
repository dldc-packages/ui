import { Item } from "@dldc/ui-components/item";
import type { TDesignPadding } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TDesignPadding[] = ["1", "1x", "2", "2x", "3"];

  const [highlighted, setHighlighted] = useState<TDesignPadding | null>();

  function renderElement(padding: TDesignPadding, key?: string) {
    return (
      <Item key={key} size="10" padding={padding} className="bg-white/5">
        Padding {padding}
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        renderCell={({ row: padding, key }) => renderElement(padding, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
