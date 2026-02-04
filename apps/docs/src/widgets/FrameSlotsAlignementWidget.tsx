import { Frame } from "@dldc/ui-components/frame";
import { Prose } from "@dldc/ui-components/prose";
import { CheckCircleIcon, XCircleIcon, XIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

const okIcon = <CheckCircleIcon className="mb-0x mr-1 inline-flex size-[1rem] text-green-500" />;
const notOkIcon = <XCircleIcon className="mb-0x mr-1 inline-flex size-[1rem] text-red-500" />;

export function FrameSlotsAlignementWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    {
      element: <Frame style={{ width: "150px" }} endIcon={<XIcon />} />,
      description: (
        <p>
          {okIcon} Using only <code>endIcon</code> is fine
        </p>
      ),
    },
    {
      element: <Frame style={{ width: "150px" }} endSlot={<Frame variant="solid" startIcon={<XIcon />} />} />,
      description: (
        <p>
          {notOkIcon} Using only <code>endSlot</code> does not align properly
        </p>
      ),
    },
    {
      element: (
        <Frame
          style={{ width: "150px" }}
          endSlot={<Frame variant="solid" startIcon={<XIcon />} style={{ marginLeft: "auto" }} />}
        />
      ),
      description: (
        <p>
          {okIcon} Using <code>marginLeft: 'auto'</code> on <code>endSlot</code> aligns properly
        </p>
      ),
    },
    {
      element: (
        <Frame style={{ width: "150px" }} endSlot={<Frame variant="solid" startIcon={<XIcon />} />}>
          Hey
        </Frame>
      ),
      description: (
        <p>
          {okIcon} Using <code>endSlot</code> with text children
        </p>
      ),
    },
    {
      element: (
        <Frame style={{ width: "150px" }} endSlot={<Frame variant="solid" startIcon={<XIcon />} />}>
          <span>Hey</span>
        </Frame>
      ),
      description: (
        <p>
          {notOkIcon} Using <code>endSlot</code> with non-text children does not align properly
        </p>
      ),
    },
    {
      element: (
        <Frame style={{ width: "150px" }} endSlot={<Frame variant="solid" startIcon={<XIcon />} />}>
          <span style={{ flex: 1 }}>Hey</span>
        </Frame>
      ),
      description: (
        <p>
          {okIcon} Setting <code>flex: 1</code> on non-text <code>children</code> aligns properly
        </p>
      ),
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted.element) : "// Hover a Frame to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => (
          <div className="flex flex-col items-start gap-1" key={key}>
            <Prose invert>{example.description}</Prose>
            {example.element}
          </div>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
