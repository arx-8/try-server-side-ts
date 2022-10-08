import express, { Request, Response } from "express"
import _ from "lodash"
import sortBy from "lodash/sortBy"

const app = express()

app.get("/", (_req: Request, res: Response) => {
  // console.log(_)
  console.log(sortBy)
  res.send("Hello World!")
})

if (import.meta.env.PROD) {
  const port = 30001
  console.log(`Example app listening on port ${port}!`)
  app.listen(port)
}

export const viteNodeApp = app
