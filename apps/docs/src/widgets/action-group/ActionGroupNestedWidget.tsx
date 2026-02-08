import { Button } from "@dldc/ui-ariakit/button";
import { ActionGroup } from "@dldc/ui-components/action";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ActionGroupNestedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ActionGroup>
      <Button>File</Button>
      <ActionGroup roundedEnds="none">
        <Button>New</Button>
        <Button>Open</Button>
        <Button>Save</Button>
      </ActionGroup>
      <Button>Edit</Button>
    </ActionGroup>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <div>{element}</div>
    </div>
  );
}
