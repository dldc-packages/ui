import { defineLibraryConfig } from "@config/tsdown";

export default defineLibraryConfig({
  entry: ["./src/*.{ts,tsx}", "src/*/index.{ts,tsx}"],
  vanillaExtract: true,
});
