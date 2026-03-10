import { Action } from "@dldc/ui-components/action";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionRoundedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const roundedValues: TDesignRounded[] = ["0", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted !== null
          ? printElement(<Action rounded={highlighted}>Rounded {highlighted}</Action>)
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedValues}
        renderCell={({ row: rounded, key }) => (
          <Action key={key} rounded={rounded} size="10">
            Rounded {rounded}
          </Action>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
