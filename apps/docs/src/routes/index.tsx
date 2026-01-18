import { Prose } from "@dldc/ui-components/prose";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Prose invert className="text-center">
        <h1>Welcome</h1>
        <p>
          Explore the UI components and documentation
          <br />
          Select a component from the menu on the left to get started.
        </p>
      </Prose>
    </div>
  );
}
