// @ts-check

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [["text", { file: "report.txt" }]],
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
