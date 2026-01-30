import { defineLibraryConfig } from "@config/tsdown";

export default defineLibraryConfig({
  entry: ["./src/*/index.ts"],
  vanillaExtract: true,
});
