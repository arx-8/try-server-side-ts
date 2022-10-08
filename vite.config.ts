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
  server: {
    port: 30001,
  },
})
