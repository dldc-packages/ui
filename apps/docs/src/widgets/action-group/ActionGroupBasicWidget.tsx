import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ActionGroupBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ActionGroup>
      <Button>Open</Button>
      <Button>Edit</Button>
      <Button>Close</Button>
    </ActionGroup>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {element}
      </Paper>
    </div>
  );
}
