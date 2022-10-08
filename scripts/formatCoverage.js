// @ts-check
const assert = require("assert")
const { mainModule } = require("process")

/**
format jest coverage text

# Usage

## Run

```sh
cat coverage/report.txt | node scripts/formatCoverage.js
```

## Run UnitTest

```sh
echo "test" | node scripts/formatCoverage.js
```
 */

/**
 * In markdown previews, leading whitespace is hidden and indentation may appear broken.
 * Therefore, replace leading spaces with "_" to preserve indentation.
 *
 * @param {string} text
 * @returns {string}
 */
const format = (text) => {
  const lines = text.trim().split("\n")

  // remove extra header and footer
  const hfRemovedLines = lines.slice(1, lines.length - 1)

  // replace prefix spaces
  const prefixSpacesRgx = /^ +/g
  const prefixReplacedLines = hfRemovedLines.map((l) => {
    const found = l.match(prefixSpacesRgx)
    if (found != null) {
      const numOfSpaces = found[0].length
      const target = " ".repeat(numOfSpaces)
      const replace = "\\_".repeat(numOfSpaces)
      return l.replace(target, replace)
    }
    return l
  })

  return prefixReplacedLines.join("\n")
}

const test = () => {
  /**
   * @type {(() => void)[]}
   */
  const cases = [
    () => {
      // Arrange
      const text = `\
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |       0 |      100 |       0 |       0 |                   
 src          |       0 |      100 |       0 |       0 |                   
  index.ts    |       0 |      100 |       0 |       0 | 4-24              
 src/handlers |       0 |      100 |       0 |       0 |                   
  index.ts    |       0 |      100 |       0 |       0 | 5-7               
--------------|---------|----------|---------|---------|-------------------`

      // Act
      const result = format(text)

      // Assert
      assert.deepStrictEqual(
        result,
        `\
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |       0 |      100 |       0 |       0 |                   
\\_src          |       0 |      100 |       0 |       0 |                   
\\_\\_index.ts    |       0 |      100 |       0 |       0 | 4-24              
\\_src/handlers |       0 |      100 |       0 |       0 |                   
\\_\\_index.ts    |       0 |      100 |       0 |       0 | 5-7               `
      )
    },

    () => {
      // Arrange
      const text = `\


------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |       0 |        0 |       0 |       0 |                   
 src              |       0 |      100 |       0 |       0 |                   
  index.ts        |       0 |      100 |       0 |       0 | 4-24              
 src/handlers     |       0 |        0 |       0 |       0 |                   
  index.ts        |       0 |      100 |       0 |       0 | 5-7               
  x.ts            |       0 |        0 |       0 |       0 | 1-5               
 src/handlers/a   |       0 |        0 |       0 |       0 |                   
  x.ts            |       0 |        0 |       0 |       0 | 1-5               
------------------|---------|----------|---------|---------|-------------------

`

      // Act
      const result = format(text)

      // Assert
      assert.deepStrictEqual(
        result,
        `\
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |       0 |        0 |       0 |       0 |                   
\\_src              |       0 |      100 |       0 |       0 |                   
\\_\\_index.ts        |       0 |      100 |       0 |       0 | 4-24              
\\_src/handlers     |       0 |        0 |       0 |       0 |                   
\\_\\_index.ts        |       0 |      100 |       0 |       0 | 5-7               
\\_\\_x.ts            |       0 |        0 |       0 |       0 | 1-5               
\\_src/handlers/a   |       0 |        0 |       0 |       0 |                   
\\_\\_x.ts            |       0 |        0 |       0 |       0 | 1-5               `
      )
    },
  ]

  console.log("Running tests ...")
  cases.forEach((c) => c())
  console.log("All passed!")
}

/**
 * @param {string} input
 * @returns {void}
 */
const main = (input) => {
  const result = format(input)
  console.log(result)
}

/**
 * ****************************
 * Entry point
 * ****************************
 */
const input = require("fs").readFileSync("/dev/stdin", "utf8")
if (input.trim() === "test") {
  test()
} else {
  main(input)
}
