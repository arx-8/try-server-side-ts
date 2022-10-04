// @ts-check
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild")
const baseOptions = require("./baseOptions")

esbuild
  .build({
    ...baseOptions,
    sourcemap: true,
    watch: {
      onRebuild: (error, result) => {
        if (error) console.error("watch build failed:", error)
        else console.log("watch build succeeded:", result)
      },
    },
  })
  .then(() => console.log("watching..."))
  .catch(() => process.exit(1))
