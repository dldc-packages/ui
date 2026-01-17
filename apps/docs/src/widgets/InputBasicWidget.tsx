import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

export function InputBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [value, setValue] = useState("");

  const example = <Input value={value} onChange={(e) => setValue(e.target.value)} />;

  return (
    <div className={cn("grid grid-cols-subgrid", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {example}
      </Paper>
    </div>
  );
}
