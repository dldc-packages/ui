import { cn } from "@/utils/styles";
import { Button } from "@dldc/ui-ariakit/button";
import { DefaultDesignProvider } from "@dldc/ui-components/design-context";
import { Frame } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
import { type ComponentPropsWithRef } from "react";
import { CodeHighlight } from "../components/CodeHighlight";
import { printElement } from "../utils/printElement";

const example = (
  <DefaultDesignProvider height="9">
    <Frame>Outer</Frame>
    <DefaultDesignProvider variant="solid">
      <Button>Inner</Button>
    </DefaultDesignProvider>
  </DefaultDesignProvider>
);

export function DefaultDesignProviderNestedWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <Paper background="900" className="flex items-start gap-2 p-3">
        {example}
      </Paper>
    </div>
  );
}
