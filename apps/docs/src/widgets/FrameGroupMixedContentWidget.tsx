import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { ButtonLike } from "@dldc/ui-components/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupMixedContentWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <FrameGroup>
      <ButtonLike>Connected</ButtonLike>
      <Button>Settings</Button>
      <Button>Disconnect</Button>
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
