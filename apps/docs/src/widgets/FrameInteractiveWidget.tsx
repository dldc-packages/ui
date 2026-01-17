import { Frame } from "@dldc/ui-components/frame";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameInteractiveWidget() {
  const states = [
    { label: "Non-interactive", interactive: false },
    { label: "Interactive", interactive: true },
  ];

  const [highlighted, setHighlighted] = useState<{ state: (typeof states)[number] } | null>();

  return (
    <div className="grid grid-cols-subgrid">
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
