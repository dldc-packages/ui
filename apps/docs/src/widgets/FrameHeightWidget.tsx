import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameHeightWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignHeight[] = ["6", "7", "8", "9", "10", "11", "12"];

  const [highlighted, setHighlighted] = useState<TDesignHeight | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Frame height={highlighted}>Height {highlighted}</Frame>)
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => (
          <Frame key={key} height={height}>
            Height {height}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
