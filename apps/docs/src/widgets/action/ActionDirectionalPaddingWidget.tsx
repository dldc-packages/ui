import { Action } from "@dldc/ui-components/action";
import type { TItemContentPaddingModeResolved } from "@dldc/ui-styles/item-content";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionDirectionalPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TItemContentPaddingModeResolved[] = ["text", "icon", "none"];
  const propName = ["startPaddingMode", "endPaddingMode"];

  const [highlighted, setHighlighted] = useState<{
    padding: TItemContentPaddingModeResolved;
    propName: (typeof propName)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Action {...{ [highlighted.propName]: highlighted.padding }}>Text</Action>)
          : "// Hover a Action to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        columnsDims={propName}
        renderCell={({ row: padding, column: propName, key }) => (
          <Action key={key} {...{ [propName]: padding }}>
            Text
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { padding: cell.row, propName: cell.column } : null)}
      />
    </div>
  );
}
