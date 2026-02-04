import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function FrameGroupDirectionWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const directions = [
    {
      label: "Horizontal",
      direction: "horizontal" as const,
      code: `<FrameGroup direction="horizontal">
  {/* Button children */}
</FrameGroup>`,
    },
    {
      label: "Vertical",
      direction: "vertical" as const,
      code: `<FrameGroup direction="vertical">
  {/* Button children */}
</FrameGroup>`,
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof directions)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted?.code || "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={directions}
        renderCell={({ row: direction, key }) => (
          <FrameGroup key={key} direction={direction.direction}>
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Reset</Button>
          </FrameGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
