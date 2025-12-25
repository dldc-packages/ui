import { Paper } from "@dldc/components/Paper";
import { css } from "@dldc/design/core";

export function App() {
  return <Paper sigils={[css({ background: "blue" }), css({ background: "green" })]}>This is paper</Paper>;
}
