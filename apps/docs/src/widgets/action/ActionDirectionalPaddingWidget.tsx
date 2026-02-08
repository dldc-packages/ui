import type { TActionContentPaddingResolved } from "@dldc/ui-styles/action-content";

import { Action } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionDirectionalPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TActionContentPaddingResolved[] = ["text", "icon", "none"];
  const propName = ["startPadding", "endPadding"];

  const [highlighted, setHighlighted] = useState<{
    padding: TActionContentPaddingResolved;
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
