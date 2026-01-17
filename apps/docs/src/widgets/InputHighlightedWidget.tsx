import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

type HighlightState = {
  label: string;
  highlighted: boolean;
  highlightColor?: TPaletteColor;
};

export function InputHighlightedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const states: HighlightState[] = [
    { label: "Normal state", highlighted: false },
    { label: "Highlighted (blue)", highlighted: true, highlightColor: "blue" },
    { label: "Error state (red)", highlighted: true, highlightColor: "red" },
    { label: "Success state (green)", highlighted: true, highlightColor: "green" },
  ];
  const [highlightedState, setHighlightedState] = useState<HighlightState | null>();

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlightedState
          ? printElement(
              <Input
                highlighted={highlightedState.highlighted}
                highlightColor={highlightedState.highlightColor}
                placeholder={highlightedState.label}
              />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        renderCell={({ row: state, key }) => (
          <Input
            key={key}
            highlighted={state.highlighted}
            highlightColor={state.highlightColor}
            placeholder={state.label}
          />
        )}
        onHighlightedCell={(cell) => setHighlightedState(cell?.row ?? null)}
      />
    </div>
  );
}
