import { Button } from "@dldc/ui-components/button";
import { Dialog, type TDialogSizeValue } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

const sizes: TDialogSizeValue[] = ["sm", "md", "lg", "xl", "full"];

export function DialogSizeWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [activeSize, setActiveSize] = useState<TDialogSizeValue>("md");
  const [show, setShow] = useState(false);

  const codeElement = (
    <Dialog size={activeSize}>
      <p>Content</p>
    </Dialog>
  );

  const previewElement = (
    <Dialog size={activeSize}>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold capitalize">{activeSize} Dialog</h3>
        <p>Use the size prop to control the dialog max width.</p>
        <div className="flex justify-end">
          <Button onClick={() => setShow(false)}>Close</Button>
        </div>
      </div>
    </Dialog>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(codeElement)}
      </CodeHighlight>

      <GeometryPaper background="900" className="space-y-3 p-3" rounded="2" skipProviders>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <Button key={size} variant={activeSize === size ? "solid" : "surface"} onClick={() => setActiveSize(size)}>
              {size}
            </Button>
          ))}
          <Button color="green" onClick={() => setShow(true)}>
            Open
          </Button>
        </div>

        {show && previewElement}
      </GeometryPaper>
    </div>
  );
}
