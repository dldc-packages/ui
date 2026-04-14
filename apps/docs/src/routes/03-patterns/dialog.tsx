import * as UIDialog from "@dldc/ui-ariakit/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Prose } from "@dldc/ui-components/prose";
import { Dialog } from "@dldc/ui-patterns/dialog";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2Icon, XIcon } from "lucide-react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { StoryLayout } from "@/components/StoryLayout";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export const Route = createFileRoute("/03-patterns/dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog Pattern</h1>

        <p>
          <code>@dldc/ui-patterns/dialog</code> is a higher-level composition built on top of
          <code> @dldc/ui-ariakit/dialog</code>. It gives you a ready-to-use dialog shell with a title area and close
          control already wired.
        </p>
        <p>
          Use this pattern when you want a fast modal setup with consistent structure, while still keeping Ariakit
          behavior and props.
        </p>

        <h2>What It Adds</h2>
        <ul>
          <li>
            A precomposed <code>Dialog</code> with a default header
          </li>
          <li>
            A required <code>title</code> prop rendered as the dialog heading
          </li>
          <li>
            Full compatibility with base Ariakit dialog props
          </li>
        </ul>

        <h2>Example</h2>
        <DialogPatternExample />
      </Prose>
    </StoryLayout>
  );
}

function DialogPatternExample() {
  const example = (
    <UIDialog.DialogProvider>
      <UIDialog.DialogDisclosure startIcon={<Trash2Icon />}>Delete project</UIDialog.DialogDisclosure>

      <Dialog title="Delete project?" size="sm">
        <UIDialog.DialogDescription>
          This action permanently removes the project and cannot be undone.
        </UIDialog.DialogDescription>

        <div className="mt-4 flex justify-end gap-2">
          <UIDialog.DialogDismiss variant="ghost" startIcon={<XIcon />}>
            Cancel
          </UIDialog.DialogDismiss>
          <UIDialog.DialogDismiss color="red" startIcon={<Trash2Icon />}>
            Delete
          </UIDialog.DialogDismiss>
        </div>
      </Dialog>
    </UIDialog.DialogProvider>
  );

  return (
    <div className={cn(notProseClass, proseBleedClass, "grid grid-cols-1 gap-4 *:min-h-[260px] lg:grid-cols-2")}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>

      <GeometryPaper background="900" className="p-4" rounded="2" skipProviders>
        <div className="flex h-full items-start justify-center pt-6">{example}</div>
      </GeometryPaper>
    </div>
  );
}
