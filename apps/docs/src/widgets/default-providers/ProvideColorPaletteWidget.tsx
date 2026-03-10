import { Button, ButtonLike } from "@dldc/ui-components/button";
import { GeometryPaper } from "@dldc/ui-components/geometry-paper";
import { Input } from "@dldc/ui-components/input";
import { dynamicColor } from "@dldc/ui-core/colors";
import { type ComponentPropsWithRef } from "react";

import { CodeHighlight } from "@/components/CodeHighlight";
import { printElement } from "@/utils/printElement";
import { cn } from "@/utils/styles";

export function ProvideColorPaletteWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  const element = (
    <div className={cn("flex flex-row gap-2", dynamicColor.red)}>
      <Button variant="solid">Button</Button>
      <ButtonLike variant="solid">ButtonLike</ButtonLike>
      <Input variant="solid" placeholder="Type here" />
    </div>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {printElement(element, {
          replacePropsRow: { className: `className={dynamicColor.red}` },
        })}
      </CodeHighlight>
      <GeometryPaper background="900" className="p-3" rounded="2" skipProviders>
        {element}
      </GeometryPaper>
    </div>
  );
}
