import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ActionGroupDirectionWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const directions = [
    {
      label: "Horizontal",
      direction: "horizontal" as const,
      code: `<ActionGroup direction="horizontal">
  {/* Button children */}
</ActionGroup>`,
    },
    {
      label: "Vertical",
      direction: "vertical" as const,
      code: `<ActionGroup direction="vertical">
  {/* Button children */}
</ActionGroup>`,
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
          <ActionGroup key={key} direction={direction.direction}>
            <Button>Save</Button>
            <Button>Cancel</Button>
            <Button>Reset</Button>
          </ActionGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
