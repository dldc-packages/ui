import type { TDesignHeight } from "@dldc/ui-core/size";

import { Frame } from "@dldc/ui-components/frame";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameAutoSpacingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignHeight[] = ["7", "8", "9", "10", "12"];
  const contentHeights: TDesignHeight[] = ["4", "5", "6"];

  const [highlighted, setHighlighted] = useState<{
    height: TDesignHeight;
    contentHeight: TDesignHeight;
  } | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame height={highlighted.height} contentHeight={highlighted.contentHeight} startIcon={<UserIcon />} />,
            )
          : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        columnsDims={contentHeights}
        renderCell={({ row: height, column: contentHeight, key }) => (
          <Frame key={key} height={height} contentHeight={contentHeight} startIcon={<UserIcon />} className="w-full">
            Hey
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted({ height: cell.row, contentHeight: cell.column })}
      />
    </div>
  );
}
