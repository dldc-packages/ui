import { Item } from "@dldc/ui-components/item";
import { Typography } from "@dldc/ui-components/typography";
import { CheckCircleIcon, XCircleIcon, XIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

const okIcon = <CheckCircleIcon className="mb-0x mr-1 inline-flex size-[1rem] text-green-500" />;
const notOkIcon = <XCircleIcon className="mb-0x mr-1 inline-flex size-[1rem] text-red-500" />;

export function ItemSlotsAlignementWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const examples = [
    {
      element: <Item className="w-[200px] bg-white/5" endIcon={<XIcon />} />,
      description: (
        <Typography>
          {okIcon} Using only <code>endIcon</code> is fine
        </Typography>
      ),
    },
    {
      element: (
        <Item className="w-[200px] bg-white/5" endSlot={<Item className="bg-neutral-700" startIcon={<XIcon />} />} />
      ),
      description: (
        <Typography>
          {notOkIcon} Using only <code>endSlot</code> does not align properly
        </Typography>
      ),
    },
    {
      element: (
        <Item
          className="w-[200px] bg-white/5"
          endSlot={<Item className="bg-neutral-700" startIcon={<XIcon />} style={{ marginLeft: "auto" }} />}
        />
      ),
      description: (
        <Typography>
          {okIcon} Using <code>marginLeft: 'auto'</code> on <code>endSlot</code> aligns properly
        </Typography>
      ),
    },
    {
      element: (
        <Item className="w-[200px] bg-white/5" endSlot={<Item className="bg-neutral-700" startIcon={<XIcon />} />}>
          Hey
        </Item>
      ),
      description: (
        <Typography>
          {okIcon} Using <code>endSlot</code> with text children
        </Typography>
      ),
    },
    {
      element: (
        <Item className="w-[200px] bg-white/5" endSlot={<Item className="bg-neutral-700" startIcon={<XIcon />} />}>
          <span>Hey</span>
        </Item>
      ),
      description: (
        <Typography>
          {notOkIcon} Using <code>endSlot</code> with non-text children does not align properly
        </Typography>
      ),
    },
    {
      element: (
        <Item className="w-[200px] bg-white/5" endSlot={<Item className="bg-neutral-700" startIcon={<XIcon />} />}>
          <span style={{ flex: 1 }}>Hey</span>
        </Item>
      ),
      description: (
        <Typography>
          {okIcon} Setting <code>flex: 1</code> on non-text <code>children</code> aligns properly
        </Typography>
      ),
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof examples)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted.element) : "// Hover a Action to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => (
          <div className="flex flex-col items-start gap-2" key={key}>
            {example.description}
            {example.element}
          </div>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
