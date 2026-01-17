import { cn } from "@/utils/styles";
import { LoadingIcon } from "@dldc/ui-components/loading-icon";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function LoadingIconBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<LoadingIcon />)}
      </CodeHighlight>
      <Paper background="900" className={cn("p-3 text-white")}>
        <LoadingIcon />
      </Paper>
    </div>
  );
}
