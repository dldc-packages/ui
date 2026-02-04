import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { HouseIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupToolbarWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <FrameGroup variant="surface">
      <Button startIcon={<HouseIcon />}>Home</Button>
      <Button startIcon={<SettingsIcon />}>Settings</Button>
      <Button startIcon={<LogOutIcon />}>Logout</Button>
    </FrameGroup>
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
