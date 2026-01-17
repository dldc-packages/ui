import { Button, type ButtonProps } from "@dldc/ui-ariakit/button";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonHoverVariantsWidget() {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<ButtonProps | null>();

  return (
    <div className="grid grid-cols-subgrid">
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
