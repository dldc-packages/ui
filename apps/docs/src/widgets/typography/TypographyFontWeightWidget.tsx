import { Typography } from "@dldc/ui-components/typography";
import { type TFontWeight } from "@dldc/ui-core/typography";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function TypographyFontWeightWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const weightsY: TFontWeight[] = [
    "thin",
    "extralight",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ];
  const [highlighted, setHighlighted] = useState<TFontWeight | null>();

  function renderElement(weight: TFontWeight, key?: string) {
    return (
      <Typography key={key} fontWeight={weight}>
        Typography ({weight})
      </Typography>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElement(highlighted)) : "// Hover an element to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={weightsY}
        renderCell={({ row: weight, key }) => renderElement(weight, key)}
        onHighlightedCell={(cell) => setHighlighted(cell ? cell.row : null)}
      />
    </div>
  );
}
