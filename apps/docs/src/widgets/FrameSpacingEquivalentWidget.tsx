import { cn } from "@/utils/styles";
import { Frame } from "@dldc/ui-components/frame";
import type { TDesignSpacing } from "@dldc/ui-core/size";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

export function FrameSpacingEquivalentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    { spacing: "6" as TDesignSpacing, height: "10" },
    { spacing: "8" as TDesignSpacing, height: "10" },
    { spacing: "10" as TDesignSpacing, height: "10" },
    { spacing: "12" as TDesignSpacing, height: "10" },
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Frame height={highlighted.height as any} spacing={highlighted.spacing} startIcon={<UserIcon />}>
                Content
              </Frame>,
            )
          : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => (
          <Frame key={key} height={example.height as any} spacing={example.spacing} startIcon={<UserIcon />}>
            Content
          </Frame>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
