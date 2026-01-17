import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function InputColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const colors: TPaletteColor[] = ["blue", "green", "red", "purple", "orange", "neutral"];
  const [highlighted, setHighlighted] = useState<TPaletteColor | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Input color={highlighted} placeholder={`${highlighted} color`} />)
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={colors}
        renderCell={({ row: color, key }) => <Input key={key} color={color} placeholder={`${color} color`} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
