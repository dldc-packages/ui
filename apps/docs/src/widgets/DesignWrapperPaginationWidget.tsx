import { Button } from "@dldc/ui-ariakit/button";
import { DesignWrapper } from "@dldc/ui-components/design-context";
import { cn } from "@/utils/styles";
import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { TDesignHeight } from "@dldc/ui-core/size";
import { HighlightedGrid } from "@/components/HighlightedGrid";

type PaginationProps = {
  height: TDesignHeight;
};

function Pagination({ height }: PaginationProps) {
  return (
    <DesignWrapper color="blue" height={height} className="flex flex-row items-center gap-3">
      <Button startIcon={<ChevronLeftIcon />} />
      <p>1 of 10</p>
      <Button startIcon={<ChevronRightIcon />} />
    </DesignWrapper>
  );
}

const functionCode = [
  `function Pagination({ height }: PaginationProps) {`,
  `  return (`,
  `    <DesignWrapper color="blue" height={height} className="flex flex-row items-center gap-3">`,
  `      <Button startIcon={<ChevronLeftIcon />} />`,
  `      <p>1 of 10</p>`,
  `      <Button startIcon={<ChevronRightIcon />} />`,
  `    </DesignWrapper>`,
  `  );`,
  `}`,
].join("\n");

export function DesignWrapperPaginationWidget({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const heights: TDesignHeight[] = ["7", "8", "9", "10", "12"];
  const [highlighted, setHighlighted] = useState<TDesignHeight | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {functionCode +
          "\n\n" +
          (highlighted
            ? "const rendered = " + printElement(<Pagination height={highlighted} />)
            : "// Hover a Frame to see the code")}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={heights}
        renderCell={({ row: height, key }) => <Pagination key={key} height={height} />}
        onHighlightedCell={(cell) => setHighlighted(cell.row)}
      />
    </div>
  );
}
