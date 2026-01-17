import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import { PlusIcon, XIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameSlotsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    <Frame startSlot={<Frame variant="solid" startIcon={<PlusIcon />} />}>Start Slot</Frame>,
    <Frame endSlot={<Frame variant="solid" startIcon={<XIcon />} />}>End Slot</Frame>,
    <Frame
      startSlot={<Frame variant="solid" startIcon={<PlusIcon />} />}
      endSlot={<Frame variant="solid" startIcon={<XIcon />} />}
    >
      Both Slots
    </Frame>,
    <Frame startSlot={<span style={{ width: "14px", height: "14px", background: "indianred" }} />}>
      Custom Content
    </Frame>,
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted) : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => cloneElement(example, { key })}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
