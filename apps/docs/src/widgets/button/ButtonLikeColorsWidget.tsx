import { ButtonLike } from "@dldc/ui-components/button";
import type { TPaletteColor } from "@dldc/ui-core/colors";
import type { TDesignVariant } from "@dldc/ui-core/variants";
import { UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";

export function ButtonLikeColorsWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const variants: TDesignVariant[] = ["solid", "surface", "subtle", "ghost", "input"];
  const colors: TPaletteColor[] = ["blue", "green", "red", "orange", "purple", "gray"];

  const [highlighted, setHighlighted] = useState<{ variant: TDesignVariant; color: TPaletteColor } | null>();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted
          ? `<ButtonLike variant="${highlighted.variant}" color="${highlighted.color}" startIcon={<UserIcon />}>${highlighted.color}</ButtonLike>`
          : "// Hover a ButtonLike to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={variants}
        columnsDims={colors}
        renderCell={({ row: variant, column: color, key }) => (
          <ButtonLike key={key} variant={variant} color={color} startIcon={<UserIcon />}>
            {color}
          </ButtonLike>
        )}
        onHighlightedCell={(cell) => setHighlighted(cell ? { variant: cell.row, color: cell.column } : null)}
      />
    </div>
  );
}
