import { Item } from "@dldc/ui-components/item";
import type { TDesignRounded } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemAutoRoundedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const roundedVariants: TDesignRounded[] = ["0", "1", "2", "3", "4", "5"];

  const [highlighted, setHighlighted] = useState<TDesignRounded | null>();

  const renderElement = (rounded: TDesignRounded, key?: string) => (
    <Item className="bg-white/10" rounded={rounded} size="12" paddingMode="icon" padding="1" key={key}>
      <Item className="bg-white/10" paddingMode="icon" padding="1">
        <Item className="bg-white/10">Nested</Item>
      </Item>
    </Item>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={roundedVariants}
        renderCell={({ row: rounded, key }) => renderElement(rounded, key)}
        onHighlightedCell={({ row }) => setHighlighted(row)}
      />
    </div>
  );
}
