import { Action } from "@dldc/ui-components/action";
import { Button } from "@dldc/ui-components/button";
import { HouseIcon, XIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

const examples = [
  <Action key="1" size={14} startIcon={<HouseIcon />} endSlot={<Button startIcon={<XIcon />} variant="ghost" />}>
    Hello
  </Action>,
  <Action
    key="2"
    size={14}
    startIcon={<HouseIcon />}
    endSlot={
      <Button
        padding="2"
        className="-mx-paddingVar"
        contentSize="parentSize"
        size="autoFromContent"
        startIcon={<XIcon />}
        variant="ghost"
      />
    }
  >
    Hello
  </Action>,
];

export function ActionSizeAutoFromContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => cloneElement(example, { key })}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
