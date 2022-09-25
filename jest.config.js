// @ts-check

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
      },
    ],
  },
}

module.exports = config
