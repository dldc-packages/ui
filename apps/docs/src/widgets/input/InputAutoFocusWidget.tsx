import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Input } from "@dldc/ui-components/input";
import { SearchIcon } from "lucide-react";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function InputAutoFocusWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const example = <Input startIcon={<SearchIcon />} placeholder="Click the icon to focus..." />;

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <GeometryPaper background="900" rounded="2" padding={3} skipProviders className="p-paddingVar">
        {example}
      </GeometryPaper>
    </div>
  );
}
