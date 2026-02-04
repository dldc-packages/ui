import { Button, ButtonLike } from "@dldc/ui-components/button";
import { FrameGroup } from "@dldc/ui-components/frame";
import { Input } from "@dldc/ui-components/input";
import { SearchIcon, SendIcon, UserIcon } from "lucide-react";
import { useState, type ComponentPropsWithRef } from "react";

import { cn } from "@/utils/styles";

import { CodeHighlight } from "../components/CodeHighlight";
import { HighlightedGrid } from "../components/HighlightedGrid";
import { printElement } from "../utils/printElement";

type Example = {
  label: string;
  element: React.ReactElement;
};

export function InputFrameGroupWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const [highlighted, setHighlighted] = useState<Example | null>();

  const examples: Example[] = [
    {
      label: "Search Bar",
      element: (
        <FrameGroup variant="solid" color="blue">
          <Input placeholder="Search..." startIcon={<SearchIcon />} />
          <Button>Search</Button>
        </FrameGroup>
      ),
    },
    {
      label: "Message Form",
      element: (
        <FrameGroup variant="surface" color="green">
          <Input placeholder="Type a message..." startIcon={<UserIcon />} />
          <Button variant="solid" startIcon={<SendIcon />}>
            Send
          </Button>
        </FrameGroup>
      ),
    },
    {
      label: "Form item",
      element: (
        <FrameGroup variant="input">
          <ButtonLike>Username</ButtonLike>
          <Input placeholder="Enter username" />
        </FrameGroup>
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
