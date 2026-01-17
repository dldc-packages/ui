import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { ButtonLike } from "@dldc/ui-components/button";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonLikeComparisonWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];
  const types = [
    { label: "Button", Component: Button, description: "Interactive with hover states" },
    { label: "ButtonLike", Component: ButtonLike, description: "Static, no hover states" },
  ];

  const [highlighted, setHighlighted] = useState<{ variant: TDesignVariant; type: (typeof types)[number] } | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<${highlighted.type.label} variant="${highlighted.variant}" startIcon={<UserIcon />}>Label</${highlighted.type.label}>`
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={types}
        renderCell={({ row: variant, column: type, key }) => {
          const { Component } = type;
          return (
            <Component key={key} variant={variant} startIcon={<UserIcon />}>
              {type.label}
            </Component>
          );
        }}
        onHighlightedCell={(cell) => setHighlighted(cell ? { variant: cell.row, type: cell.column } : null)}
      />
    </div>
  );
}
