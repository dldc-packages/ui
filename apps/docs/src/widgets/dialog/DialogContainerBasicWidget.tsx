import { Button } from "@dldc/ui-components/button";
import { DialogPositioner, DialogRoot } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogContainerBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const button = <Button onClick={() => setShow((s) => !s)}>Toggle Dialog</Button>;
  const element = (
    <DialogRoot scrollable>
      <DialogPositioner>
        <div className="bg-neutral-925 rounded-2 max-w-[600px] p-4">
          {button}
          <p>Hello</p>
        </div>
      </DialogPositioner>
    </DialogRoot>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element, { replacePropsRaw: { onClick: "" } })}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {button}
        {show && element}
      </GeometryPaper>
    </div>
  );
}
