import { Action } from "@dldc/ui-components/action";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

// oxlint-disable react/jsx-key
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    <Action>Save Document</Action>,
    <Action startIcon={<UserIcon />}>Save</Action>,
    <Action endIcon={<ChevronDownIcon />}>Options</Action>,
    <Action endIcon={<ChevronDownIcon />} style={{ width: 150 }}>
      Options
    </Action>,
    <Action startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>
      Profile
    </Action>,
    <Action startIcon={<UserIcon />} />,
    <Action />,
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
