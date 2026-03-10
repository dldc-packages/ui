import { Input } from "@dldc/ui-components/input";
import type { TDesignSize } from "@dldc/ui-core/size";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

export function InputContentSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentSizes: TDesignSize[] = ["6", "7", "8", "9"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>();

  function renderElem(contentSize: TDesignSize, key?: string) {
    return <Input key={key} size="10" contentSize={contentSize} placeholder={`Content size ${contentSize}`} />;
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(renderElem(highlighted)) : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentSizes}
        renderCell={({ row: contentSize, key }) => renderElem(contentSize, key)}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
