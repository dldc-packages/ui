import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { useState } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputBasicWidget() {
  const [value, setValue] = useState("");

  const example = <Input value={value} onChange={(e) => setValue(e.target.value)} />;

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
