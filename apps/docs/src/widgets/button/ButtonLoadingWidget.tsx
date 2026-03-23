import { Button } from "@dldc/ui-components/button";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ButtonLoadingWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const contentVariations = [
    { children: "Save Changes", code: "" },
    { children: "Save Changes", startIcon: <UserIcon />, code: "startIcon={<UserIcon />}" },
    {
      children: "Save Changes",
      endIcon: <ChevronDownIcon />,
      code: "endIcon={<ChevronDownIcon />}",
    },
    {
      children: "Save Changes",
      startIcon: <UserIcon />,
      endIcon: <ChevronDownIcon />,
      code: "startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}",
    },
    { children: undefined, startIcon: <UserIcon />, code: "startIcon={<UserIcon />}" },
  ];

  const loadingStates = [
    { label: "Normal", loading: false, code: "" },
    { label: "Loading", loading: true, code: "loading={true}" },
  ];

  const [highlighted, setHighlighted] = useState<{
    content: (typeof contentVariations)[number];
    loading: (typeof loadingStates)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button ${highlighted.content.code} ${highlighted.loading.code} ${highlighted.content.children !== undefined ? `>${highlighted.content.children}</Button>` : "/>"}`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={contentVariations}
        columnsDims={loadingStates}
        renderCell={({ row: content, column: loadingState, key }) => (
          <Button key={key} loading={loadingState.loading} startIcon={content.startIcon} endIcon={content.endIcon}>
            {content.children}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { content: cell.row, loading: cell.column } : null)}
      />
    </div>
  );
}
