import { Button } from "@dldc/ui-components/button";
import { Dialog } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Fragment, useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogScrollWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const longContent = (
    <Fragment>
      <h3 className="text-lg font-semibold">Dialog Scroll Behavior</h3>
      <p>
        This content is intentionally tall so you can see how <code>DialogRoot</code> handles overflow and keeps the
        dialog usable.
      </p>

      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <p key={index} className="min-h-[300px] rounded-md bg-neutral-900/70 p-3">
            Section {index + 1}. Long content block to force vertical overflow.
          </p>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setShow(false)}>Close</Button>
      </div>
    </Fragment>
  );

  const element = <Dialog>{longContent}</Dialog>;

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element, { replaceChildrenReferences: new Map([[longContent, "{/* long content */}"]]) })}
      </CodeHighlight>

      <GeometryPaper background="900" className="space-y-3 p-3" rounded="2" skipProviders>
        <p className="text-sm text-neutral-300">
          Open the dialog and scroll inside it. The dialog remains centered while content scrolls within the dialog
          layer.
        </p>
        <Button color="green" onClick={() => setShow(true)}>
          Open Scrollable Dialog
        </Button>
        {show && element}
      </GeometryPaper>
    </div>
  );
}
