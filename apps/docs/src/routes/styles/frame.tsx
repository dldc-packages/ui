import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/styles/frame")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/styles/frame"!</div>;
}
