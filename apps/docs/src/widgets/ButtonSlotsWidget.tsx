import { Button } from "@dldc/ui-ariakit/button";
import { ButtonLike } from "@dldc/ui-components/button";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonSlotsWidget() {
  const slotConfigs = [
    {
      label: "Nested Button Start",
      startSlot: <ButtonLike variant="solid" startIcon={<PlusIcon />} />,
      code: 'startSlot={<ButtonLike variant="solid" startIcon={<PlusIcon />} />}',
    },
    {
      label: "Nested Button End",
      endSlot: <ButtonLike variant="solid" startIcon={<XIcon />} />,
      code: 'endSlot={<ButtonLike variant="solid" startIcon={<XIcon />} />}',
    },
    {
      label: "Both Slots",
      startSlot: <ButtonLike variant="solid" startIcon={<PlusIcon />} />,
      endSlot: <ButtonLike variant="solid" startIcon={<XIcon />} />,
      code: 'startSlot={<ButtonLike variant="solid" startIcon={<PlusIcon />} />} endSlot={<ButtonLike variant="solid" startIcon={<XIcon />} />}',
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof slotConfigs)[number] | null>();

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button ${highlighted.code}>${highlighted.label}</Button>`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={slotConfigs}
        renderCell={({ row: config, key }) => (
          <Button key={key} startSlot={config.startSlot} endSlot={config.endSlot}>
            {config.label}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
