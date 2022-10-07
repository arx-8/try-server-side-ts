// @ts-check

const base = require("./etsc.config.base")

/**
 * @type {import("esbuild-node-tsc/dist/config").Config}
 */
const config = {
  ...base,
  esbuild: {
    ...base.esbuild,
    minify: true,
  },
}

module.exports = config
