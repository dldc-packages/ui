import { Item } from "@dldc/ui-components/item";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

// oxlint-disable react/jsx-key
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    <Item className="bg-white/5">Save Document</Item>,
    <Item className="bg-white/5" startIcon={<UserIcon />}>
      Save
    </Item>,
    <Item className="bg-white/5" endIcon={<ChevronDownIcon />}>
      Options
    </Item>,
    <Item className="bg-white/5" endIcon={<ChevronDownIcon />} style={{ width: 150 }}>
      Options
    </Item>,
    <Item className="bg-white/5" startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>
      Profile
    </Item>,
    <Item className="bg-white/5" startIcon={<UserIcon />} />,
    <Item className="bg-white/5" />,
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted) : "// Hover a Item to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => cloneElement(example, { key })}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
