// @ts-check
const fs = require("fs")

// load swcrc and generate for jest
const swcrcRaw = fs.readFileSync("./configs/.swcrc.dev", "utf8")
/** @type {import("@swc/core").Config} */
const swcrc = JSON.parse(swcrcRaw)
const swcrcJest = {
  jsc: { ...swcrc.jsc },
  sourceMaps: "inline",
}

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [["text", { file: "report.txt" }]],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcrcJest],
  },
}

module.exports = config
