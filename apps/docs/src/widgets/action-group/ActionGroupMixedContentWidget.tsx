import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { ButtonLike } from "@dldc/ui-components/button";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ActionGroupMixedContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ActionGroup>
      <ButtonLike>Connected</ButtonLike>
      <Button>Settings</Button>
      <Button>Disconnect</Button>
    </ActionGroup>
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
