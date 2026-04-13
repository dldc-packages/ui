import * as Dialog from "@dldc/ui-ariakit/dialog";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Prose } from "@dldc/ui-components/prose";
import { notProseClass, proseBleedClass } from "@dldc/ui-styles/prose";
import { createFileRoute } from "@tanstack/react-router";
import { Package2Icon, XIcon } from "lucide-react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { StoryLayout } from "@/components/StoryLayout";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export const Route = createFileRoute("/02-ariakit/dialog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StoryLayout>
      <Prose invert>
        <h1>Dialog</h1>
        <p>
          The <code>@dldc/ui-ariakit/dialog</code> package provides accessible dialog behavior with dldc visual styles.
          Use <code>DialogProvider</code> to manage state, <code>DialogDisclosure</code> to open the modal,
          <code>Dialog</code> to render content, and <code>DialogDismiss</code> to close it.
        </p>

        <h2>Component Mapping</h2>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Ariakit component</th>
              <th>Dldc UI Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>DialogProvider</code>
              </td>
              <td>
                <code>Ariakit.DialogProvider</code>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <code>DialogDisclosure</code>
              </td>
              <td>
                <code>Ariakit.DialogDisclosure</code>
              </td>
              <td>
                <code>Button</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>Dialog</code>
              </td>
              <td>
                <code>Ariakit.Dialog</code>
              </td>
              <td>
                <code>Dialog</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>DialogHeading</code>
              </td>
              <td>
                <code>Ariakit.DialogHeading</code>
              </td>
              <td>
                <code>Typography</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>DialogDescription</code>
              </td>
              <td>
                <code>Ariakit.DialogDescription</code>
              </td>
              <td>
                <code>Typography</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>DialogDismiss</code>
              </td>
              <td>
                <code>Ariakit.DialogDismiss</code>
              </td>
              <td>
                <code>Button</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Example</h2>
        <DialogExample />
      </Prose>
    </StoryLayout>
  );
}

function DialogExample() {
  const example = (
    <Dialog.DialogProvider>
      <Dialog.DialogDisclosure startIcon={<Package2Icon />}>Open dialog</Dialog.DialogDisclosure>
      <Dialog.Dialog>
        <Dialog.DialogHeading>Delete project?</Dialog.DialogHeading>
        <Dialog.DialogDescription>
          This action permanently removes the project and cannot be undone.
        </Dialog.DialogDescription>
        <div className="mt-4 flex justify-end">
          <Dialog.DialogDismiss startIcon={<XIcon />}>Close</Dialog.DialogDismiss>
        </div>
      </Dialog.Dialog>
    </Dialog.DialogProvider>
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
