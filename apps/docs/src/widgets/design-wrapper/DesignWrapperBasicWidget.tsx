import { Button } from "@dldc/ui-ariakit/button";
import { Action } from "@dldc/ui-components/action";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function DesignWrapperBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    {
      key: "without",
      label: "Without wrapper",
      element: (
        <div className="flex flex-row items-center gap-2">
          <Action>Action</Action>
          <Button>Button</Button>
          <Input placeholder="Input" />
          <p>Regular text</p>
        </div>
      ),
    },
    {
      key: "with",
      label: "With wrapper",
      element: (
        <DesignWrapper color="blue" size="10" padding="1" className="flex flex-row items-center gap-2">
          <Action>Action</Action>
          <Button>Button</Button>
          <Input placeholder="Input" />
          <p>Regular text</p>
        </DesignWrapper>
      ),
    },
  ];

  const [highlighted, setHighlighted] = useState<string | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {(() => {
          if (!highlighted) return "// Hover an example to see the code";
          const example = examples.find((ex) => ex.key === highlighted);
          return example ? printElement(example.element) : "// Example not found";
        })()}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row }) => (
          <Paper background="900" className="flex flex-col items-start gap-2 p-3">
            <div className="text-white/40">{row.label}</div>
            {row.element}
          </Paper>
        )}
        onHighlightedCell={({ row }) => setHighlighted(row.key)}
        className="p-4"
      />
    </div>
  );
}
