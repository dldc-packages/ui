import { Button, ButtonLike } from "@dldc/ui-components/button";
import { DialogHeader } from "@dldc/ui-components/dialog";
import { ChevronRightIcon, Settings2Icon, SparklesIcon, XIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef, type ReactElement } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

type DialogHeaderExample = {
  label: string;
  element: ReactElement;
};

// TODO: Rework to put inside a Dialog !

export function DialogHeaderWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples: DialogHeaderExample[] = [
    {
      label: "Basic",
      element: <DialogHeader title="Project settings" />,
    },
    {
      label: "Icons",
      element: <DialogHeader title="Workspace" startIcon={<Settings2Icon />} endIcon={<ChevronRightIcon />} />,
    },
    {
      label: "Slots",
      element: (
        <DialogHeader
          title="Billing"
          startSlot={<ButtonLike variant="solid" startIcon={<SparklesIcon />} />}
          endSlot={<ButtonLike variant="surface" startIcon={<XIcon />} />}
        />
      ),
    },
    {
      label: "Content Size",
      element: (
        <DialogHeader
          title="Large title scale"
          startIcon={<SparklesIcon />}
          contentSize="5"
          endSlot={<Button variant="ghost">Done</Button>}
        />
      ),
    },
  ];

  const [highlighted, setHighlighted] = useState<DialogHeaderExample>(examples[0]);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(highlighted.element)}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row, key }) => (
          <div key={key} className="w-[300px] bg-white/5">
            {row.element}
          </div>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell.row)}
      />
    </div>
  );
}

DialogHeaderWidget.displayName = "DialogHeaderWidget";
