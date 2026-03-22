import { Button } from "@dldc/ui-ariakit/button";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import type { TDesignSize } from "@dldc/ui-core/size";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, type HTMLAttributes } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { HighlightedGrid } from "@/components/HighlightedGrid";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

type PaginationProps = {
  size: TDesignSize;
};

function Pagination({ size }: PaginationProps) {
  return (
    <DesignWrapper color="blue" size={size} className="flex flex-row items-center gap-3">
      <Button startIcon={<ChevronLeftIcon />} />
      <p>1 of 10</p>
      <Button startIcon={<ChevronRightIcon />} />
    </DesignWrapper>
  );
}

Pagination.displayName = "Pagination";

const functionCode = [
  `function Pagination({ size }: PaginationProps) {`,
  `  return (`,
  `    <DesignWrapper color="blue" size={size} className="flex flex-row items-center gap-3">`,
  `      <Button startIcon={<ChevronLeftIcon />} />`,
  `      <p>1 of 10</p>`,
  `      <Button startIcon={<ChevronRightIcon />} />`,
  `    </DesignWrapper>`,
  `  );`,
  `}`,
].join("\n");

export function DesignWrapperPaginationWidget({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const sizes: TDesignSize[] = ["7", "8", "9", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignSize | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {functionCode +
          "\n\n" +
          (highlighted
            ? "const rendered = " + printElement(<Pagination size={highlighted} />)
            : "// Hover an element to see the code")}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={sizes}
        renderCell={({ row: size, key }) => <Pagination key={key} size={size} />}
        onHighlightedCell={(cell) => setHighlighted(cell.row)}
      />
    </div>
  );
}
