import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { ChevronDownIcon, EllipsisVerticalIcon, GridIcon, UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonIconsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const iconConfigs = [
    { children: "Start Icon", startIcon: <UserIcon />, endIcon: undefined, code: "startIcon={<UserIcon />}" },
    { children: "End Icon", startIcon: undefined, endIcon: <GridIcon />, code: "endIcon={<GridIcon />}" },
    {
      children: "Both Icons",
      startIcon: <UserIcon />,
      endIcon: <ChevronDownIcon />,
      code: "startIcon={<UserIcon />} endIcon={<ChevronDownIcon />}",
    },
    {
      startIcon: <EllipsisVerticalIcon />,
      endIcon: undefined,
      children: undefined,
      code: "startIcon={<EllipsisVerticalIcon />}",
    },
  ];

  const [highlighted, setHighlighted] = useState<(typeof iconConfigs)[number] | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<Button ${highlighted.code} ${highlighted.children !== undefined ? `>${highlighted.children}</Button>` : " />"}`
          : "// Hover a button to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={iconConfigs}
        renderCell={({ row: config, key }) => (
          <Button key={key} startIcon={config.startIcon} endIcon={config.endIcon}>
            {config.children}
          </Button>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
