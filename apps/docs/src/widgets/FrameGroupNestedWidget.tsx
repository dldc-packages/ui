import { Button } from "@dldc/ui-ariakit/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupNestedWidget() {
  const element = (
    <FrameGroup>
      <Button>File</Button>
      <FrameGroup roundedEnds="none">
        <Button>New</Button>
        <Button>Open</Button>
        <Button>Save</Button>
      </FrameGroup>
      <Button>Edit</Button>
    </FrameGroup>
  );

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element)}
      </CodeHighlight>
      <div>{element}</div>
    </div>
  );
}
