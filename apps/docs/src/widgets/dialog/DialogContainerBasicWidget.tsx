import { Button } from "@dldc/ui-components/button";
import { DialogPositioner, DialogRoot } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogContainerBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const button = <Button onClick={() => setShow((s) => !s)}>{show ? "Hide" : "Show"} DialogContainer</Button>;
  const element = (
    <DialogRoot scrollable>
      <DialogPositioner>
        <GeometryPaper className="p-paddingVar max-w-[700px]" background="925" rounded={5} padding={4}>
          {button}
          <p className="h-[300px] shrink-0">Hello</p>
          <p className="h-[300px] shrink-0">Hello</p>
          <p className="h-[300px] shrink-0">Hello</p>
          <p className="h-[300px] shrink-0">Hello</p>
          <p className="h-[300px] shrink-0">Hello</p>
        </GeometryPaper>
      </DialogPositioner>
    </DialogRoot>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {button}
        {show && element}
      </GeometryPaper>
    </div>
  );
}
