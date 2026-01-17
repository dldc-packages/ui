import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-components/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { ChartBarIcon, FileTextIcon, UserIcon } from "lucide-react";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupNavigationWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <FrameGroup direction="vertical" variant="subtle">
      <Button startIcon={<UserIcon />}>Profile</Button>
      <Button startIcon={<FileTextIcon />}>Documents</Button>
      <Button startIcon={<ChartBarIcon />}>Analytics</Button>
    </FrameGroup>
  );

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {element}
      </Paper>
    </div>
  );
}
