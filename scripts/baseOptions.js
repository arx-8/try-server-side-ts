// @ts-check

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
