import { Action } from "@dldc/ui-components/action";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { cloneElement, useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ActionAutoRoundedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const roundedVariants: TDesignRounded[] = ["0", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>();

  const renderNestedActions = (rounded: TDesignRounded) => (
    <Action rounded={rounded} size="12" paddingMode="icon" padding="1">
      <Action paddingMode="icon" padding="1">
        <Action>Nested</Action>
      </Action>
    </Action>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderNestedActions(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedVariants}
        renderCell={({ row: rounded, key }) => cloneElement(renderNestedActions(rounded), { key })}
        onHighlightedCell={({ row }) => setHighlighted(row)}
      />
    </div>
  );
}
