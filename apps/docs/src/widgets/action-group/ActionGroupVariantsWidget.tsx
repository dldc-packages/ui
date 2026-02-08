import type { TDesignVariant } from "@dldc/ui-core/variants";

import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ActionGroupVariantsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<TDesignVariant | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<ActionGroup variant="${highlighted}">
  {/* Button children */}
</ActionGroup>`
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: variant, key }) => (
          <ActionGroup key={key} variant={variant} color="blue">
            <Button>Action</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ActionGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
