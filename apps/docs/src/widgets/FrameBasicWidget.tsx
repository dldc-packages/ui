import { Frame } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Frame>Basic Frame</Frame>)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        <Frame>Basic Frame</Frame>
      </Paper>
    </div>
  );
}
