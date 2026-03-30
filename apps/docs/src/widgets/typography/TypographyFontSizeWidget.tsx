import { Typography } from "@dldc/ui-components/typography";
import { type TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function TypographyFontSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const sizesY: TDesignSize[] = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  function renderElement(size: TDesignSize, key?: string) {
    return (
      <Typography key={key} fontSize={size}>
        Typography ({size})
      </Typography>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={sizesY}
        renderCell={({ row: size, key }) => renderElement(size, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
