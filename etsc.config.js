// @ts-check

/**
 * @type {import("esbuild-node-tsc/dist/config").Config}
 */
const config = {
  esbuild: {
    minify: false,
    target: "es2015",
  },
  prebuild: async () => {
    console.log("prebuild")

    // clean up dist folder
    const rimraf = (await import("rimraf")).default
    rimraf.sync("./dist")
  },
}

module.exports = config
