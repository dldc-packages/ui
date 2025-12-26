import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">Welcome</h1>
        <p className="text-xl text-gray-600">Explore the UI components and documentation</p>
        <p className="text-sm text-gray-500">Select a component from the menu on the left to get started.</p>
      </div>
    </div>
  );
}
