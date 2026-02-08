import { Input } from "@dldc/ui-components/input";
import { SearchIcon, SendIcon, UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

type IconState = {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export function InputIconsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const states: IconState[] = [
    { label: "Search...", startIcon: <SearchIcon /> },
    { label: "Send message", endIcon: <SendIcon /> },
    { label: "Username", startIcon: <UserIcon />, endIcon: <SendIcon /> },
  ];
  const [highlighted, setHighlighted] = useState<IconState | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? printElement(
              <Input startIcon={highlighted.startIcon} endIcon={highlighted.endIcon} placeholder={highlighted.label} />,
            )
          : "// Hover an input to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={states}
        renderCell={({ row: state, key }) => (
          <Input key={key} startIcon={state.startIcon} endIcon={state.endIcon} placeholder={state.label} />
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
