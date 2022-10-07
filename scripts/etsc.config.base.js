// @ts-check

/**
 * @type {import("esbuild-node-tsc/dist/config").Config}
 */
const config = {
  esbuild: {
    platform: "node",
    target: "es2015",
  },
  prebuild: async () => {
    // clean up dist folder
    const rimraf = (await import("rimraf")).default
    rimraf.sync("./dist")
  },
}

module.exports = config
