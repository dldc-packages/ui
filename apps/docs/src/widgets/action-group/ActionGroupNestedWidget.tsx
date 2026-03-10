import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { ChevronDown } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";

export function ActionGroupNestedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const items = [
    {
      key: "nested",
      element: (
        <ActionGroup>
          <Button>File</Button>
          <ActionGroup roundedEnds="none">
            <Button>New</Button>
            <Button>Open</Button>
            <Button>Save</Button>
          </ActionGroup>
          <Button>Edit</Button>
        </ActionGroup>
      ),
    },
    {
      key: "second",
      element: (
        <ActionGroup>
          <Button>File</Button>
          <ActionGroup roundedEnds="end">
            <Button>New</Button>
            <Button>Open</Button>
            <Button>Save</Button>
          </ActionGroup>
        </ActionGroup>
      ),
    },
    {
      key: "third",
      element: (
        <ActionGroup>
          <ActionGroup roundedEnds="start" innerDividers="partial">
            <Button>Open</Button>
            <Button startIcon={<ChevronDown />} />
          </ActionGroup>
          <Button>New</Button>
          <Button>Save</Button>
        </ActionGroup>
      ),
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof items)[number]["key"] | null>();

  const highlightedItem = items.find((item) => item.key === highlighted);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlightedItem ? printElement(highlightedItem.element) : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={items}
        renderCell={({ row }) => row.element}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row.key : null)}
      />
    </div>
  );
}
