import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/ast.ts", "./src/create.ts", "./src/builder.ts", "./src/serialize.ts"],
  platform: "neutral",
  dts: true,
  exports: true,
});
