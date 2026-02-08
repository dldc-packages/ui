import { Action } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionInteractiveWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const states = [
    { label: "Non-interactive", interactive: false },
    { label: "Interactive", interactive: true },
  ];

  const [highlighted, setHighlighted] = useState<{ state: (typeof states)[number] } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action interactive={highlighted.state.interactive || undefined}>{highlighted.state.label}</Action>,
            )
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        renderCell={({ row: state, key }) => (
          <Action key={key} interactive={state.interactive}>
            {state.label}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { state: cell.row } : null)}
      />
    </div>
  );
}
