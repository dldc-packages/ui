import { FrameInputContent } from "@dldc/ui-components/frame";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputCustomInputChildrenWidget() {
  const example = (
    <Input>
      <FrameInputContent placeholder="Enter text..." maxLength={20} autoComplete="off" />
    </Input>
  );

  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {example}
      </Paper>
    </div>
  );
}
