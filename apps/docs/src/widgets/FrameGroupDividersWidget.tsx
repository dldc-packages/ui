import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function FrameGroupDividersWidget() {
  const innerDividerOptions = [
    { label: "With Inner Dividers", value: true },
    { label: "No Inner Dividers", value: false },
  ];

  const [highlighted, setHighlighted] = useState<{
    inner: (typeof innerDividerOptions)[number];
  } | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<FrameGroup 
  innerDividers={${highlighted.inner.value}}
>
  {/* Button children */}
</FrameGroup>`
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={innerDividerOptions}
        renderCell={({ row: inner, key }) => (
          <FrameGroup key={key} innerDividers={inner.value}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </FrameGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { inner: cell.row } : null)}
      />
    </div>
  );
}
