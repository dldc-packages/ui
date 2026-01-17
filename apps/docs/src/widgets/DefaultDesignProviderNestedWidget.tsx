import { Button } from "@dldc/ui-ariakit/button";
import { DefaultDesignProvider } from "@dldc/ui-components/design-context";
import { Frame } from "@dldc/ui-components/frame";
import { Paper } from "@dldc/ui-components/paper";
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

export function DefaultDesignProviderNestedWidget() {
  return (
    <div className="grid grid-cols-subgrid">
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(example)}
      </CodeHighlight>
      <Paper background="900" className="p-3 flex gap-2 items-start">
        {example}
      </Paper>
    </div>
  );
}
