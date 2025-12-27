import { Frame } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function FrameBasicWidget() {
  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Frame>Basic Frame</Frame>)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        <Frame>Basic Frame</Frame>
      </Paper>
    </div>
  );
}
