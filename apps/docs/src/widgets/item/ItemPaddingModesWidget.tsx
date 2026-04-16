import { Item } from "@dldc/ui-components/item";
import type { TItemContentPaddingMode } from "@dldc/ui-components/item-content";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemPaddingModesWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddingModes: TItemContentPaddingMode[] = ["auto", "text", "icon", "none"];
  const examples = [
    { props: { children: "Hello World" } },
    { props: { startIcon: <UserIcon /> } },
    { props: { children: "Hey", endIcon: <UserIcon /> } },
  ];

  const [highlighted, setHighlighted] = useState<{
    padding: TItemContentPaddingMode;
    example: (typeof examples)[number];
  } | null>();

  function renderElement(paddingMode: TItemContentPaddingMode, example: (typeof examples)[number], key?: string) {
    return <Item className="bg-white/5" key={key} paddingMode={paddingMode} {...example.props} />;
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.padding, highlighted.example))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddingModes}
        columnsDims={examples}
        renderCell={({ row: paddingMode, column: example, key }) => renderElement(paddingMode, example, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { padding: cell.row, example: cell.column } : null)}
        cellClassName="justify-center"
      />
    </div>
  );
}
