import { CodeHighlight } from "@/components/CodeHighlight";
import { cn } from "@/utils/styles";
import { Button, ButtonLike } from "@dldc/ui-components/button";
import { Input } from "@dldc/ui-components/input";
import { Paper } from "@dldc/ui-components/paper";
import { dynamicColor } from "@dldc/ui-core/colors";
import { type ComponentPropsWithRef } from "react";

export function ProvideColorPaletteWidget({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      <CodeHighlight language="jsx" theme="dark-plus">
        {[
          `<div className={dynamicColor.red}>`,
          `  <Button variant="solid">Button</Button>`,
          `  <ButtonLike variant="solid">ButtonLike</ButtonLike>`,
          `  <Input variant="solid" placeholder='Type here' />`,
          `</div>`,
        ].join("\n")}
      </CodeHighlight>
      <Paper background="900" className="p-3">
        <div className={cn("flex flex-row gap-2", dynamicColor.red)}>
          <Button variant="solid">Button</Button>
          <ButtonLike variant="solid">ButtonLike</ButtonLike>
          <Input variant="solid" placeholder="Type here" />
        </div>
      </Paper>
    </div>
  );
}
