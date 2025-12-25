import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/*.{ts,tsx}", "./src/*/index.{ts,tsx}"],
  platform: "neutral",
  dts: true,
  plugins: [vanillaExtractPlugin({ extract: { name: "styles.css", sourcemap: false } })],
  exports: {
    customExports(pkg) {
      pkg["./styles.css"] = "./dist/styles.css";
      return pkg;
    },
  },
  // Ensure CSS asset is emitted directly into dist as "bundle.css" (no hash, no assets subdir)
  outputOptions: {
    assetFileNames: (assetInfo: any) => {
      if (assetInfo.name === "styles.css") {
        return "styles.css";
      }
      // keep rollup defaults (or put other assets into assets/)
      return "assets/[name]-[hash][extname]";
    },
  },
});
