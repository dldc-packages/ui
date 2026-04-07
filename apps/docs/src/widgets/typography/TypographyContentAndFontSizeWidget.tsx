import { Typography } from "@dldc/ui-components/typography";
import { type TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

type TRowDim = "fixed-content" | "fixed-font";

interface HighlightedState {
  row: TRowDim;
  column: TDesignSize;
}

export function TypographyContentAndFontSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const fixedContentSize: TDesignSize = "10";
  const fixedFontSize: TDesignSize = "3";

  const columns: TDesignSize[] = ["3", "4", "5", "6", "7"];
  const rows: TRowDim[] = ["fixed-content", "fixed-font"];

  const [highlighted, setHighlighted] = useState<HighlightedState | null>(null);

  function renderElement(row: TRowDim, column: TDesignSize, key?: string) {
    const contentSize = row === "fixed-content" ? fixedContentSize : column;
    const fontSize = row === "fixed-font" ? fixedFontSize : column;

    return (
      <Typography key={key} contentSize={contentSize} fontSize={fontSize}>
        Hello
        <br />
        world
      </Typography>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(renderElement(highlighted.row, highlighted.column))
          : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={rows}
        columnsDims={columns}
        renderCell={({ row, column, key }) => renderElement(row, column, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? { row: cell.row, column: cell.column } : null)}
      />
    </div>
  );
}
