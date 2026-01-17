import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { SearchIcon } from "lucide-react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputAutoFocusWidget() {
  const example = <Input startIcon={<SearchIcon />} placeholder="Click the icon to focus..." />;

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
