import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Item, ItemGroup } from "@dldc/ui-components/item";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ItemGroupBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ItemGroup>
      <Item className="bg-white/5">Open</Item>
      <Item className="bg-white/10">Edit</Item>
      <Item className="bg-white/15">Close</Item>
    </ItemGroup>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {element}
      </GeometryPaper>
    </div>
  );
}
