import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Input } from "@dldc/ui-components/input";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function InputPlaceholderWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Input placeholder="Enter your name..." />)}
      </CodeHighlight>
      <GeometryPaper background="900" rounded="2" padding={3} skipProviders className="p-paddingVar">
        <Input placeholder="Enter your name..." />
      </GeometryPaper>
    </div>
  );
}
