import { Action } from "@dldc/ui-components/action";
import type { TDesignSize } from "@dldc/ui-core/size";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionAutoSpacingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignSize[] = ["7", "8", "9", "10", "12"];
  const contentHeights: TDesignSize[] = ["4", "5", "6"];

  const [highlighted, setHighlighted] = useState<{
    height: TDesignSize;
    contentHeight: TDesignSize;
  } | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action
                size={highlighted.height}
                // TODO
                // contentHeight={highlighted.contentHeight}
                startIcon={<UserIcon />}
              />,
            )
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        columnsDims={contentHeights}
        renderCell={({ row: size, column: _contentHeight, key }) => (
          <Action
            key={key}
            size={size}
            // TODO
            // contentHeight={contentHeight}
            startIcon={<UserIcon />}
            className="w-full"
          >
            Hey
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted({ height: cell.row, contentHeight: cell.column })}
      />
    </div>
  );
}
