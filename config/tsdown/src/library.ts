import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { dts } from "rolldown-plugin-dts";
import { TsdownInputOption, UserConfig } from "tsdown";

export interface LibraryConfig {
  entry: TsdownInputOption;
  vanillaExtract?: boolean;
}

export type { UserConfig };

export function defineLibraryConfig({ entry, vanillaExtract = false }: LibraryConfig): UserConfig {
  const config: UserConfig = {
    entry,
    platform: "neutral",
    dts: true,
    exports: true,
  };

  if (vanillaExtract) {
    config.plugins = [
      vanillaExtractPlugin({
        identifiers: "short",
        extract: { name: "styles.css", sourcemap: true },
      }),
      dts({}),
    ];
    config.dts = false;
    config.exports = {
      customExports(pkg) {
        pkg["./styles.css"] = "./dist/styles.css";
        return pkg;
      },
    };
    // Ensure CSS asset is emitted directly into dist as "bundle.css" (no hash, no assets subdir)
    config.outputOptions = {
      assetFileNames: (assetInfo: any) => {
        if (assetInfo.name === "styles.css") {
          return "styles.css";
        }
        if (assetInfo.name === "styles.css.map") {
          return "styles.css.map";
        }
        // keep rollup defaults (or put other assets into assets/)
        return "assets/[name]-[hash][extname]";
      },
    };
  }

  return config;
}
