import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/*.{ts,tsx}", "./src/*/index.{ts,tsx}"],
  platform: "neutral",
  dts: true,
  exports: true,
});
