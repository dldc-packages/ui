import { Button } from "@dldc/ui-components/button";
import { Dialog } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Fragment, useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogNoScrollWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const longContent = (
    <Fragment>
      <h3 className="text-lg font-semibold">Dialog With scrollable=false</h3>
      <p>The dialog layer itself does not scroll. Manage overflow inside your dialog content when needed.</p>

      <div className="-mx-paddingVar space-y-2 overflow-auto rounded-md p-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <p key={index} className="min-h-[120px] rounded-md bg-neutral-900/70 p-3">
            Block {index + 1}. This area scrolls internally because the Dialog root scrolling is disabled.
          </p>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setShow(false)}>Close</Button>
      </div>
    </Fragment>
  );

  const element = (
    <Dialog scrollable={false} className="max-h-full overflow-hidden">
      {longContent}
    </Dialog>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element, { replaceChildrenReferences: new Map([[longContent, "{/* long content */}"]]) })}
      </CodeHighlight>

      <GeometryPaper background="900" className="space-y-3 p-3" rounded="2" skipProviders>
        <Button color="orange" onClick={() => setShow(true)}>
          Open Non-Scrollable Root Dialog
        </Button>
        {show && element}
      </GeometryPaper>
    </div>
  );
}
