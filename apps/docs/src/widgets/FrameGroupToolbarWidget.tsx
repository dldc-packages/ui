import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { HouseIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupToolbarWidget() {
  const element = (
    <FrameGroup variant="surface">
      <Button startIcon={<HouseIcon />}>Home</Button>
      <Button startIcon={<SettingsIcon />}>Settings</Button>
      <Button startIcon={<LogOutIcon />}>Logout</Button>
    </FrameGroup>
  );

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {element}
      </Paper>
    </div>
  );
}
