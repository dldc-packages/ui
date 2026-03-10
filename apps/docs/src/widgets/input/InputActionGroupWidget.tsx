import { ActionGroup } from "@dldc/ui-components/action";
import { Button, ButtonLike } from "@dldc/ui-components/button";
import { Input } from "@dldc/ui-components/input";
import { SearchIcon, SendIcon, UserIcon } from "lucide-react";
import { useId, useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../../components/CodeHighlight";
import { HighlightedGrid } from "../../components/HighlightedGrid";
import { printElement } from "../../utils/printElement";

type Example = {
  label: string;
  element: React.ReactElement;
};

export function InputActionGroupWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [highlighted, setHighlighted] = useState<Example | null>();

  const id = useId();

  const examples: Example[] = [
    {
      label: "Search Bar",
      element: (
        <ActionGroup variant="solid" color="blue" innerDividers="partial">
          <Input placeholder="Search..." startIcon={<SearchIcon />} />
          <Button>Search</Button>
        </ActionGroup>
      ),
    },
    {
      label: "Message Form",
      element: (
        <ActionGroup variant="surface" color="green" innerDividers="none">
          <Input placeholder="Type a message..." startIcon={<UserIcon />} />
          <Button variant="solid" startIcon={<SendIcon />}>
            Send
          </Button>
        </ActionGroup>
      ),
    },
    {
      label: "Form item",
      element: (
        <ActionGroup variant="input" innerDividers="partial">
          <ButtonLike render={<label htmlFor={id} />}>Username</ButtonLike>
          <Input placeholder="Enter username" id={id} />
        </ActionGroup>
      ),
    },
  ];

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {highlighted ? printElement(highlighted.element) : "// Hover an example to see the code"}
      </CodeHighlight>
      <HighlightedGrid
        rowsDims={examples}
        renderCell={({ row: example, key }) => <div key={key}>{example.element}</div>}
        onHighlightedCell={(cell) => setHighlighted(cell?.row ?? null)}
      />
    </div>
  );
}
