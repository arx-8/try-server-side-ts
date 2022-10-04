// @ts-check
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    node: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/all",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          2,
          {
            allowExpressions: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": 2,
        "@typescript-eslint/no-type-alias": 0,
      },
    },
    {
      extends: ["plugin:jest/all"],
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "jest/prefer-to-be": 0,
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "prefer-arrow-functions",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        // "type" naming should be PascalCase
        custom: {
          match: false,
          regex: "send|start|find",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    camelcase: 0,
    "import/no-default-export": 2,
    "no-restricted-syntax": [
      2,
      {
        message:
          "Do not use `enum`. Use `Plain Object` or `Literal Types` instead.",
        selector: "TSEnumDeclaration",
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": 2,
    "prefer-template": 2,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    yoda: [2, "never", { onlyEquality: true }],
  },
}

module.exports = config
