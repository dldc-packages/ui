import { Paper } from "@dldc/ui-components/paper";
import { LoadingBlock } from "@dldc/ui-patterns/loading-block";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function LoadingBlockBasicWidget() {
  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<LoadingBlock />)}
      </CodeHighlight>
      <Paper background="900" className="p-3 text-white">
        <LoadingBlock />
      </Paper>
    </div>
  );
}
