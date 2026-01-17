import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameRoundedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const roundedValues: TDesignRounded[] = ["0", "0x", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>(null);

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted !== null
          ? printElement(<Frame rounded={highlighted}>Rounded {highlighted}</Frame>)
          : "// Hover a frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedValues}
        renderCell={({ row: rounded, key }) => (
          <Frame key={key} rounded={rounded}>
            Rounded {rounded}
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
