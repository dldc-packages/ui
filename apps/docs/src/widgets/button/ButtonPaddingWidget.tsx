import { Button } from "@dldc/ui-components/button";
import type { TDesignPadding } from "@dldc/ui-core/size";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ButtonPaddingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const paddings: TDesignPadding[] = ["0x", "1", "1x", "2"];
  const [highlighted, setHighlighted] = useState<TDesignPadding | null>();

  function renderElem(padding: TDesignPadding, key?: string) {
    return (
      <Button key={key} padding={padding} startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}>
        Padding {padding}
      </Button>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElem(highlighted)) : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={paddings}
        renderCell={({ row, key }) => renderElem(row, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
