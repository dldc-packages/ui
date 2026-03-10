import { ActionGroup } from "@dldc/ui-components/action";
import { Button } from "@dldc/ui-components/button";
import { Paper } from "@dldc/ui-components/paper";
import { ChartBarIcon, FileTextIcon, UserIcon } from "lucide-react";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { printElement } from "../../utils/printElement";

export function ActionGroupNavigationWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <ActionGroup direction="vertical" variant="subtle" innerDividers="partial">
      <Button startIcon={<UserIcon />}>Profile</Button>
      <Button startIcon={<FileTextIcon />}>Documents</Button>
      <Button startIcon={<ChartBarIcon />}>Analytics</Button>
    </ActionGroup>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {element}
      </Paper>
    </div>
  );
}
