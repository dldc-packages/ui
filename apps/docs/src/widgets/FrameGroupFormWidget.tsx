import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupFormWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <FrameGroup>
      <Button variant="solid" color="blue">
        Save
      </Button>
      <Button>Cancel</Button>
      <Button color="gray">Reset</Button>
    </FrameGroup>
  );

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {element}
      </Paper>
    </div>
  );
}
