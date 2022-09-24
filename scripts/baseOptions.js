// @ts-check
const esbuild = require("esbuild")

/**
 * @type {import("esbuild").BuildOptions}
 */
const baseOptions = {
  bundle: true,
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  platform: "node",
}

module.exports = baseOptions
