import { Checkbox } from "@dldc/ui-ariakit/checkbox";
// import { Label } from "@dldc/ui-components/label";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ariakit/checkbox")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <label>
      <Checkbox /> I have read and agree to the terms and conditions
    </label>
  );
}
