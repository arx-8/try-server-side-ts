import express, { Request, Response } from "express"
import _ from "lodash"
import sortBy from "lodash/sortBy"

const app = express()

app.get("/", (_req: Request, res: Response) => {
  console.log(_)
  // console.log(sortBy)
  res.send("Hello World!")
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000!")
})
