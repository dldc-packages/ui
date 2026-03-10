import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState, type ComponentPropsWithRef } from "react";

import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ActionGroupDividersWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface"];
  const dividers: ("full" | "partial" | "none")[] = ["full", "partial", "none"];

  const [highlighted, setHighlighted] = useState<{
    variant: TDesignVariant;
    divider: (typeof dividers)[number];
  } | null>();

  function renderElement(variant: TDesignVariant, divider: (typeof dividers)[number], key?: string) {
    return (
      <ActionGroup key={key} innerDividers={divider} variant={variant}>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ActionGroup>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.variant, highlighted.divider))
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={dividers}
        columnsDims={variants}
        renderCell={({ row: divider, column: variant, key }) => renderElement(variant, divider, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { variant: cell.column, divider: cell.row } : null)}
      />
    </div>
  );
}
