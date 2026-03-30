import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Typography } from "@dldc/ui-components/typography";
import type { ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function TypographyBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = <Typography>Hello</Typography>;

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {element}
      </GeometryPaper>
    </div>
  );
}
