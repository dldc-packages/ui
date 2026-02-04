import { LoadingIcon } from "@dldc/ui-components/loading-icon";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function LoadingIconSizesWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const sizes = [24, 48, 60, 96];

  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(<LoadingIcon size={highlighted} />) : "// Hover an icon to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={sizes}
        renderCell={({ row: size }) => <LoadingIcon size={size} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
        className="text-white"
      />
    </div>
  );
}
