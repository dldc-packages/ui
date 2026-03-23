import { Button } from "@dldc/ui-components/button";
import type { TDesignSize } from "@dldc/ui-core/size";
import { HouseIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

interface RowData {
  size: TDesignSize;
  contentSize: TDesignSize;
}

export function ButtonPaddingSizesWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const rows: RowData[] = [
    { size: "6", contentSize: "4" },
    { size: "8", contentSize: "5" },
    { size: "10", contentSize: "6" },
    { size: "12", contentSize: "7x" },
  ];
  const [highlighted, setHighlighted] = useState<RowData | null>();

  function renderElem({ contentSize, size }: RowData, key?: string) {
    return (
      <Button key={key} size={size} contentSize={contentSize} padding="3" startIcon={<HouseIcon />}>
        Size {size} / Content {contentSize}
      </Button>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElem(highlighted)) : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={rows}
        renderCell={({ row, key }) => renderElem(row, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
