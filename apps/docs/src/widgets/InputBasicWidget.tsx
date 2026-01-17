import { cn } from "@/utils/styles";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { useState, type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";

export function InputBasicWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [value, setValue] = useState("");

  const example = <Input value={value} onChange={(e) => setValue(e.target.value)} />;

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {`<Input value={value} onChange={/* ... */} />`}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        {example}
      </Paper>
    </div>
  );
}
