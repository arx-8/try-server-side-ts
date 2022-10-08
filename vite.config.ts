import path from "path"
import { defineConfig } from "vite"
import { VitePluginNode } from "vite-plugin-node"

/**
 * @see https://github.com/axe-me/vite-plugin-node#get-started
 */
export default defineConfig({
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
})
