// @ts-check
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild")
const baseOptions = require("./baseOptions")

esbuild
  .build({
    ...baseOptions,
    minify: true,
  })
  .catch(() => process.exit(1))
