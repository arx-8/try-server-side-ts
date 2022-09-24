// @ts-check
require("esbuild")
  .build({
    bundle: true,
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.js",
  })
  .catch(() => process.exit(1))
