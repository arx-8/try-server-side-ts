// @ts-check
const esbuild = require("esbuild")
const baseOptions = require("./baseOptions")

esbuild
  .build({
    ...baseOptions,
    sourcemap: true,
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error)
        else console.log("watch build succeeded:", result)
      },
    },
  })
  .then(() => console.log("watching..."))
  .catch(() => process.exit(1))
