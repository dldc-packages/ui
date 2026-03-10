import { Action } from "@dldc/ui-components/action";
import type { TDesignPadding } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TDesignPadding[] = ["1", "1x", "2", "2_x", "2x"];

  const [highlighted, setHighlighted] = useState<TDesignPadding | null>();

  function renderElement(padding: TDesignPadding, key?: string) {
    return (
      <Action key={key} padding={padding}>
        Padding {padding}
      </Action>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        renderCell={({ row: padding, key }) => renderElement(padding, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
