import { Item } from "@dldc/ui-components/item";
import type { TDesignSize } from "@dldc/ui-core/size";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function ItemAutoSpacingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const heights: TDesignSize[] = ["7", "8", "9", "10", "12"];
  const contentSizes: TDesignSize[] = ["3", "3x", "4", "4x"];

  const [highlighted, setHighlighted] = useState<{
    height: TDesignSize;
    contentSize: TDesignSize;
  } | null>(null);

  function renderElement(height: TDesignSize, contentSize: TDesignSize, key?: string) {
    return (
      <Item key={key} size={height} contentSize={contentSize} startIcon={<UserIcon />} className="bg-white/5">
        Hey
      </Item>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.height, highlighted.contentSize))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        columnsDims={contentSizes}
        renderCell={({ row: size, column: contentSize, key }) => renderElement(size, contentSize, key)}
        onHighlightedCell={(cell) => setHighlighted({ height: cell.row, contentSize: cell.column })}
        cellClassName="justify-stretch"
      />
    </div>
  );
}
