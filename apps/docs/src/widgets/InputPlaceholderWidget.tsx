import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputPlaceholderWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Input placeholder="Enter your name..." />)}
      </CodeHighlight>
      <Paper background="900" className="gap-2 p-3">
        <Input placeholder="Enter your name..." />
      </Paper>
    </div>
  );
}
