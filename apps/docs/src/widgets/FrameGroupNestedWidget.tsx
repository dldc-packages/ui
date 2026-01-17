import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupNestedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <FrameGroup>
      <Button>File</Button>
      <FrameGroup roundedEnds="none">
        <Button>New</Button>
        <Button>Open</Button>
        <Button>Save</Button>
      </FrameGroup>
      <Button>Edit</Button>
    </FrameGroup>
  );

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <div>{element}</div>
    </div>
  );
}
