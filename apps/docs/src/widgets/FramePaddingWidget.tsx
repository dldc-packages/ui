import type { TFrameContentPadding } from "@dldc/ui-components/frame-content";

import { Frame } from "@dldc/ui-components/frame";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FramePaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TFrameContentPadding[] = ["auto", "text", "icon", "none"];
  const examples = [
    { props: { children: "Hello World" } },
    { props: { startIcon: <UserIcon /> } },
    { props: { children: "Hey", endIcon: <UserIcon /> } },
  ];

  const [highlighted, setHighlighted] = useState<{
    padding: TFrameContentPadding;
    example: (typeof examples)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Frame padding={highlighted.padding} {...highlighted.example.props} />)
          : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        columnsDims={examples}
        renderCell={({ row: padding, column: example, key }) => (
          <Frame key={key} padding={padding} {...example.props} />
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { padding: cell.row, example: cell.column } : null)}
      />
    </div>
  );
}
