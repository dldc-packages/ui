import { Item, ItemGroup } from "@dldc/ui-components/item";
import { useState, type ComponentPropsWithRef } from "react";

import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ItemGroupDirectionWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const directions = [
    {
      label: "Horizontal",
      direction: "horizontal" as const,
    },
    {
      label: "Vertical",
      direction: "vertical" as const,
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof directions)[number] | null>();

  function renderElement(direction: (typeof directions)[number], key?: string) {
    return (
      <ItemGroup key={key} direction={direction.direction}>
        <Item className="bg-white/5">Open</Item>
        <Item className="bg-white/10">Edit</Item>
        <Item className="bg-white/15">Close</Item>
      </ItemGroup>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted), { replacePropsRaw: { children: "{/* ... */}" } })
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={directions}
        renderCell={({ row: direction, key }) => renderElement(direction, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
