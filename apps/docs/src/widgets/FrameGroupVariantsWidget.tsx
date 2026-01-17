import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function FrameGroupVariantsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];

  const [highlighted, setHighlighted] = useState<TDesignVariant | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<FrameGroup variant="${highlighted}">
  {/* Button children */}
</FrameGroup>`
          : "// Hover a button group to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        renderCell={({ row: variant, key }) => (
          <FrameGroup key={key} variant={variant} color="blue">
            <Button>Action</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </FrameGroup>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
