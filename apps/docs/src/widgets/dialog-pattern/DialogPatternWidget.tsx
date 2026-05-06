import { Button } from "@dldc/ui-ariakit/button";
import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Dialog } from "@dldc/ui-patterns/dialog";
import { Trash2Icon, XIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { Fragment } from "react/jsx-runtime";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function DialogPatternWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const example = (
    <Dialog
      title="Delete project?"
      size="sm"
      disclosure={<UIDialog.DialogDisclosure startIcon={<Trash2Icon />}>Delete project</UIDialog.DialogDisclosure>}
      startIcon={<Trash2Icon />}
      description="This action permanently removes the project and cannot be undone."
      actions={
        <Fragment>
          <UIDialog.DialogDismiss variant="subtle" startIcon={<XIcon />}>
            Cancel
          </UIDialog.DialogDismiss>
          <Button color="red" variant="solid" startIcon={<Trash2Icon />}>
            Delete
          </Button>
        </Fragment>
      }
    />
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>

      <GeometryPaper background="900" className="p-4" rounded="2" skipProviders>
        <div className="flex h-full items-start justify-center pt-6">{example}</div>
      </GeometryPaper>
    </div>
  );
}
