import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameInteractiveWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const states = [
    { label: "Non-interactive", interactive: false },
    { label: "Interactive", interactive: true },
  ];

  const [highlighted, setHighlighted] = useState<{ state: (typeof states)[number] } | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame interactive={highlighted.state.interactive || undefined}>{highlighted.state.label}</Frame>,
            )
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        renderCell={({ row: state, key }) => (
          <Frame key={key} interactive={state.interactive}>
            {state.label}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { state: cell.row } : null)}
      />
    </div>
  );
}
