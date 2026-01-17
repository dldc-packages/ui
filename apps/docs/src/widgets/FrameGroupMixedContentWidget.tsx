import { Button } from "@dldc/ui-ariakit/button";
import { ButtonLike } from "@dldc/ui-components/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameGroupMixedContentWidget() {
  const element = (
    <FrameGroup>
      <ButtonLike>Connected</ButtonLike>
      <Button>Settings</Button>
      <Button>Disconnect</Button>
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
