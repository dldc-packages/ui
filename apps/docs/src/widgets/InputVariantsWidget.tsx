import { Input } from "@dldc/ui-components/input";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function InputVariantsWidget() {
  const variants: TDesignVariant[] = ["input", "solid", "surface", "subtle", "ghost"];
  const [highlighted, setHighlighted] = useState<TDesignVariant | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(<Input variant={highlighted} placeholder={`${highlighted} variant`} />)
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: variant, key }) => <Input key={key} variant={variant} placeholder={`${variant} variant`} />}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
