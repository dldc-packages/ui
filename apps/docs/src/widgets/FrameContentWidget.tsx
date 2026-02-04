import { Frame } from "@dldc/ui-components/frame";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

// oxlint-disable react/jsx-key
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    <Frame>Save Document</Frame>,
    <Frame startIcon={<UserIcon />}>Save</Frame>,
    <Frame endIcon={<ChevronDownIcon />}>Options</Frame>,
    <Frame endIcon={<ChevronDownIcon />} style={{ width: 150 }}>
      Options
    </Frame>,
    <Frame startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>
      Profile
    </Frame>,
    <Frame startIcon={<UserIcon />} />,
    <Frame />,
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
