import { ButtonLike } from "@dldc/ui-components/button";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";

export function ButtonLikeBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];
  const examples = [
    { label: "Basic", props: {} },
    { label: "With Icon", props: { startIcon: <UserIcon /> } },
  ];

  const [highlighted, setHighlighted] = useState<{
    variant: TDesignVariant;
    example: (typeof examples)[number];
  } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<ButtonLike variant="${highlighted.variant}"${highlighted.example.props.startIcon ? " startIcon={<UserIcon />}" : ""}>${highlighted.example.label}</ButtonLike>`
          : "// Hover a ButtonLike to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={examples}
        renderCell={({ row: variant, column: example, key }) => (
          <ButtonLike key={key} variant={variant} {...example.props}>
            {example.label}
          </ButtonLike>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { variant: cell.row, example: cell.column } : null)}
      />
    </div>
  );
}
