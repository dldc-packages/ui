import { Button } from "@dldc/ui-components/button";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import { Dialog } from "@dldc/ui-components/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { IconBox } from "@dldc/ui-components/icon-box";
import { Typography } from "@dldc/ui-components/typography";
import { SparklesIcon, XIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogHeaderWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [show, setShow] = useState(false);

  const element = (
    <Dialog scrollable={false} className="flex max-h-full flex-col overflow-hidden" padding="2">
      <DesignWrapper size="10" padding="0" className="p-paddingVar gap-paddingVar flex flex-row">
        <DesignWrapper padding="2x" className="p-paddingVar gap-paddingVar flex flex-row">
          <IconBox icon={<SparklesIcon />} />
          <Typography fontWeight="semibold">This is a dialog</Typography>
        </DesignWrapper>
        <Button padding="2x" variant="ghost" startIcon={<XIcon />} className="ml-auto" onClick={() => setShow(false)} />
      </DesignWrapper>
      <div className="p-2x pt-0">
        <p>Content</p>
      </div>
    </Dialog>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>

      <GeometryPaper background="900" className="space-y-3 p-3" rounded="2" skipProviders>
        <Button color="orange" onClick={() => setShow(true)}>
          Open Dialog with header
        </Button>
        {show && element}
      </GeometryPaper>
    </div>
  );
}

DialogHeaderWidget.displayName = "DialogHeaderWidget";
