import { Input } from "@dldc/ui-components/input";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

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
  const variants: TDesignVariant[] = ["input", "surface", "subtle"];
  const [highlightedState, setHighlightedState] = useState<{
    variant: TDesignVariant;
    hitghligh: HighlightState;
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlightedState
          ? printElement(
              <Input
                highlighted={highlightedState.hitghligh.highlighted}
                highlightColor={highlightedState.hitghligh.highlightColor}
                placeholder={highlightedState.hitghligh.label}
                variant={highlightedState.variant}
              />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        columnsDims={variants}
        renderCell={({ row: state, column: variant, key }) => (
          <Input
            key={key}
            highlighted={state.highlighted}
            highlightColor={state.highlightColor}
            placeholder={state.label}
            variant={variant}
          />
        )}
        onHighlightedCell={(cell) => setHighlightedState(cell ? { variant: cell.column, hitghligh: cell.row } : null)}
      />
    </div>
  );
}
