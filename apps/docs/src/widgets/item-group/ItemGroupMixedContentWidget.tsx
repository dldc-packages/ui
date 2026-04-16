import { Button } from "@dldc/ui-ariakit/button";
import { ButtonLike } from "@dldc/ui-components/button";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { ItemGroup } from "@dldc/ui-components/item";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ItemGroupMixedContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ItemGroup>
      <ButtonLike>Connected</ButtonLike>
      <Button variant="solid" color="blue">
        Settings
      </Button>
      <Button>Disconnect</Button>
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
