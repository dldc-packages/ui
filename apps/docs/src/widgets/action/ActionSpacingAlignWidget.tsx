import { Action } from "@dldc/ui-components/action";
import type { TDesignSize } from "@dldc/ui-core/size";
import { HouseIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionSpacingAlignWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignSize[] = ["6", "8", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Action
                spacing="6"
                size={highlighted}
                // TODO
                // contentHeight="3x"
              >
                Height {highlighted}
              </Action>,
            )
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => (
          <Action
            key={key}
            size={height}
            spacing="6"
            className="w-full"
            // TODO
            // contentHeight="3x"
            startIcon={<HouseIcon />}
          >
            Height {height}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
