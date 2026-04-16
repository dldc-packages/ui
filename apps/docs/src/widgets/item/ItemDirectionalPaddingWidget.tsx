import { Item } from "@dldc/ui-components/item";
import type { TItemContentPaddingModeResolved } from "@dldc/ui-styles/item-content";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemDirectionalPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TItemContentPaddingModeResolved[] = ["text", "icon", "none"];
  const propName = ["startPaddingMode" as const, "endPaddingMode" as const];

  const [highlighted, setHighlighted] = useState<{
    padding: TItemContentPaddingModeResolved;
    propName: (typeof propName)[number];
  } | null>();

  function renderElement(
    padding: TItemContentPaddingModeResolved,
    paddingPropName: (typeof propName)[number],
    key?: string,
  ) {
    return (
      <Item key={key} {...{ [paddingPropName]: padding }} className="bg-white/5">
        Hello
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.padding, highlighted.propName))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        columnsDims={propName}
        renderCell={({ row: padding, column: propName, key }) => renderElement(padding, propName, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { padding: cell.row, propName: cell.column } : null)}
        cellClassName="justify-center"
      />
    </div>
  );
}
