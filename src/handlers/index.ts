import type { RequestHandler } from "express"
import _ from "lodash"
import sum from "lodash/sum"

export const indexGet: RequestHandler<never, string> = (_, res) => {
  // console.log(sum([1, 2, 3]))
  res.send("Hello, world!")
}
