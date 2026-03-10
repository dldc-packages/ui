import { ActionInputContent } from "@dldc/ui-components/action";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Input } from "@dldc/ui-components/input";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function InputCustomInputChildrenWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const example = (
    <Input>
      <ActionInputContent placeholder="Enter text..." maxLength={20} autoComplete="off" />
    </Input>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <GeometryPaper background="900" rounded="2" padding={3} skipProviders className="p-paddingVar">
        {example}
      </GeometryPaper>
    </div>
  );
}
