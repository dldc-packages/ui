import { Button } from "@dldc/ui-ariakit/button";
import type { TDesignSpacing } from "@dldc/ui-core/size";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonSpacingWidget() {
  const spacings: TDesignSpacing[] = ["2", "4", "6", "8"];
  const [highlighted, setHighlighted] = useState<TDesignSpacing | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button spacing="${highlighted}" startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>Spacing ${highlighted}</Button>`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={spacings}
        renderCell={({ row: spacing, key }) => (
          <Button key={key} spacing={spacing} startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>
            Spacing {spacing}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
