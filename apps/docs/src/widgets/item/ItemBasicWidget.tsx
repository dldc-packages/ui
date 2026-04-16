import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Item } from "@dldc/ui-components/item";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ItemBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const elem = <Item className="bg-white/5">Basic Item</Item>;

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(elem)}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {elem}
      </GeometryPaper>
    </div>
  );
}
