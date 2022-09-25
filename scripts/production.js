// @ts-check
const esbuild = require("esbuild")
const baseOptions = require("./baseOptions")

esbuild
  .build({
    ...baseOptions,
    minify: true,
  })
  .catch(() => process.exit(1))
