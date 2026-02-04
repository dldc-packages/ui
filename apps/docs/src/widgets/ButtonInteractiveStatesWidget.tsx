import type { TDesignVariant } from "@dldc/ui-core/variants";

import { Button } from "@dldc/ui-ariakit/button";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonInteractiveStatesWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const stateConfigs = [
    { label: "Normal", props: {}, code: "" },
    { label: "Hover State", props: { "data-hover": true }, code: "data-hover={true}" },
    { label: "Focus State", props: { "data-focus-visible": true }, code: "data-focus-visible={true}" },
  ];

  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<{
    state: (typeof stateConfigs)[number];
    variant: TDesignVariant;
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button variant="${highlighted.variant}"${highlighted.state.code ? ` ${highlighted.state.code}` : ""}>${highlighted.state.label}</Button>`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={stateConfigs}
        renderCell={({ row: variant, column: config, key }) => (
          <Button key={key} {...config.props} variant={variant}>
            {config.label}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { state: cell.column, variant: cell.row } : null)}
      />
    </div>
  );
}
