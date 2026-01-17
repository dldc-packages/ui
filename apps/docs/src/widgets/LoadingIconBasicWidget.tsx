import { cn } from "@/utils/styles";
import { LoadingIcon } from "@dldc/ui-components/loading-icon";
import { Paper } from "@dldc/ui-components/paper";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function LoadingIconBasicWidget() {
  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(<LoadingIcon />)}
      </CodeHighlight>
      <Paper background="900" className={cn("p-3 text-white")}>
        <LoadingIcon />
      </Paper>
    </div>
  );
}
