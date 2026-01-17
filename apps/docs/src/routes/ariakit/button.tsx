import { Button } from "@dldc/ui-ariakit/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ariakit/button")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Button>Button</Button>;
}
