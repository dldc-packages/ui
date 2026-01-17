import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputPlaceholderWidget() {
  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<Input placeholder="Enter your name..." />)}
      </CodeHighlight>
      <Paper background="900" className="gap-2 p-3">
        <Input placeholder="Enter your name..." />
      </Paper>
    </div>
  );
}
