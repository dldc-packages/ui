import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameVariantsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<TDesignVariant | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Frame variant={highlighted}>{highlighted}</Frame>)
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: variant, key }) => (
          <Frame key={key} variant={variant} interactive>
            {variant}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
