import type { RequestHandler } from "express"
import sum from "lodash/sum"
import { DB_PASSWORD } from "src/constants/env"

export const indexGet: RequestHandler<never, string> = (_, res) => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  console.log(sum([1, 2, 3]))
  console.log(`DB_PASSWORD !! ${DB_PASSWORD}`)
  console.log("indexGet called")
  res.send("Hello, world!")
}
