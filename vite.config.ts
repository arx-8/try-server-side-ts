import path from "path"
import { defineConfig, UserConfigExport } from "vite"
import { VitePluginNode } from "vite-plugin-node"

/**
 * @see https://github.com/axe-me/vite-plugin-node#get-started
 */
export default defineConfig(({ command }) => {
  const base: UserConfigExport = {
    plugins: [
      ...VitePluginNode({
        adapter: "express",
        appPath: "./src/index.ts",
      }),
    ],
    resolve: {
      // for absolute path import
      alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      port: 30001,
    },
  }

  if (command === "build") {
    // for production
    return {
      ...base,
      build: {
        ...base.build,
        minify: true,
      },
    }
  } else {
    // for dev
    return {
      ...base,
      build: {
        ...base.build,
        sourcemap: true,
      },
    }
  }
})
