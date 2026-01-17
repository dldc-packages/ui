import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupBasicWidget() {
  const element = (
    <FrameGroup>
      <Button>Open</Button>
      <Button>Edit</Button>
      <Button>Close</Button>
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
