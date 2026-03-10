import { Action } from "@dldc/ui-components/action";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ActionBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Action>Basic Action</Action>)}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        <Action>Basic Action</Action>
      </GeometryPaper>
    </div>
  );
}
