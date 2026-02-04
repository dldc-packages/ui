import { Input } from "@dldc/ui-components/input";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

type DisabledState = {
  label: string;
  disabled: boolean;
  value?: string;
  placeholder?: string;
};

export function InputDisabledWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const states: DisabledState[] = [
    { label: "Enabled", disabled: false, placeholder: "Enabled input" },
    { label: "Disabled (placeholder)", disabled: true, placeholder: "Disabled input" },
    { label: "Disabled (value)", disabled: true, value: "Cannot edit this" },
  ];
  const [highlighted, setHighlighted] = useState<DisabledState | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Input disabled={highlighted.disabled} value={highlighted.value} placeholder={highlighted.placeholder} />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        renderCell={({ row: state, key }) => (
          <Input key={key} disabled={state.disabled} value={state.value} placeholder={state.placeholder} />
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
