import { cn } from "@/utils/styles";
import { Paper } from "@dldc/ui-components/paper";
import { LoadingBlock } from "@dldc/ui-patterns/loading-block";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function LoadingBlockBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<LoadingBlock />)}
      </CodeHighlight>
      <Paper background="900" className="p-3 text-white">
        <LoadingBlock />
      </Paper>
    </div>
  );
}
