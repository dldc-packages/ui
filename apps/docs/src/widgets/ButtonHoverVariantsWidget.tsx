import { cn } from "@/utils/styles";
import { Button, type ButtonProps } from "@dldc/ui-ariakit/button";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonHoverVariantsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<ButtonProps | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button variant="ghost" hoverVariant="${highlighted.hoverVariant}" />`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: hoverVariant, key }) => (
          <Button key={key} variant="ghost" hoverVariant={hoverVariant}>
            <em className="font-bold">{hoverVariant}</em> on hover
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { hoverVariant: cell?.row } : null)}
      />
    </div>
  );
}
