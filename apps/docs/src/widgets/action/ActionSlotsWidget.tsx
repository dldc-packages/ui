import { Action } from "@dldc/ui-components/action";
import { PlusIcon, XIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

// oxlint-disable react/jsx-key
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionSlotsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    <Action startSlot={<Action variant="solid" startIcon={<PlusIcon />} />}>Start Slot</Action>,
    <Action endSlot={<Action variant="solid" startIcon={<XIcon />} />}>End Slot</Action>,
    <Action
      startSlot={<Action variant="solid" startIcon={<PlusIcon />} />}
      endSlot={<Action variant="solid" startIcon={<XIcon />} />}
    >
      Both Slots
    </Action>,
    <Action startSlot={<span style={{ width: "14px", height: "14px", background: "indianred" }} />}>
      Custom Content
    </Action>,
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted) : "// Hover a Action to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => cloneElement(example, { key })}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
