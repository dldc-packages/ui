import { Button } from "@dldc/ui-ariakit/button";
import { Action } from "@dldc/ui-components/action";
import { DefaultDesignProvider } from "@dldc/ui-components/design-context";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { DefaultVariantProvider } from "@dldc/ui-components/variant";
import { Fragment, useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function DefaultVariantProviderBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    {
      key: "without",
      label: "Without Provider",
      element: (
        <Fragment>
          <Action>Action</Action>
          <Button>Button</Button>
          <Input placeholder="Input" />
        </Fragment>
      ),
    },
    {
      key: "with",
      label: "With Provider",
      element: (
        <DefaultDesignProvider height="9">
          <DefaultVariantProvider variant="solid">
            <Action>Action</Action>
            <Button>Button</Button>
            <Input placeholder="Input" />
          </DefaultVariantProvider>
        </DefaultDesignProvider>
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
          <Paper background="900" className="p-3">
            <div className="flex flex-col items-start gap-2">
              <div className="text-white/40">{row.label}</div>
              <div className="flex flex-row gap-2">{row.element}</div>
            </div>
          </Paper>
        )}
        onHighlightedCell={({ row }) => setHighlighted(row.key)}
        className="p-4"
      />
    </div>
  );
}
