import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonDisabledWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];
  const states = [
    { label: "Normal", disabled: false },
    { label: "Disabled", disabled: true },
  ];

  const [highlighted, setHighlighted] = useState<{ variant: TDesignVariant; state: (typeof states)[number] } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button variant="${highlighted.variant}" ${highlighted.state.disabled ? "disabled={true}" : ""}>${highlighted.state.label}</Button>`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={states}
        renderCell={({ row: variant, column: state, key }) => (
          <Button key={key} variant={variant} disabled={state.disabled} startIcon={<UserIcon />}>
            {state.label}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { variant: cell.row, state: cell.column } : null)}
      />
    </div>
  );
}
