import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ActionGroupDividersWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const innerDividerOptions = [
    { label: "With Inner Dividers", value: true },
    { label: "No Inner Dividers", value: false },
  ];

  const [highlighted, setHighlighted] = useState<{
    inner: (typeof innerDividerOptions)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<ActionGroup 
  innerDividers={${highlighted.inner.value}}
>
  {/* Button children */}
</ActionGroup>`
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={innerDividerOptions}
        renderCell={({ row: inner, key }) => (
          <ActionGroup key={key} innerDividers={inner.value}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ActionGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { inner: cell.row } : null)}
      />
    </div>
  );
}
