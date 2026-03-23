import { Button } from "@dldc/ui-components/button";
import { Dialog } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const button = <Button onClick={() => setShow((s) => !s)}>{show ? "Hide Dialog" : "Show Dialog"}</Button>;
  const element = (
    <Dialog>
      {button}
      <p>Hello</p>
    </Dialog>
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
