import { Frame } from "@dldc/ui-components/frame";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { cloneElement, useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameAutoRoundedWidget() {
  const roundedVariants: TDesignRounded[] = ["0", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>();

  const renderNestedFrames = (rounded: TDesignRounded) => (
    <Frame rounded={rounded} height="12" padding="icon" contentHeight="10">
      <Frame contentHeight="8" padding="icon">
        <Frame>Nested</Frame>
      </Frame>
    </Frame>
  );

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderNestedFrames(highlighted)) : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedVariants}
        renderCell={({ row: rounded, key }) => cloneElement(renderNestedFrames(rounded), { key })}
        onHighlightedCell={({ row }) => setHighlighted(row)}
      />
    </div>
  );
}
