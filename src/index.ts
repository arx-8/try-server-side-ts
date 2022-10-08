import express from "express"
import { indexGet } from "src/handlers"

const app = express()

app.get("/", indexGet)

if (import.meta.env.PROD) {
  const port = 30001
  console.log(`Example app listening on port ${port}!`)
  app.listen(port)
}

export const viteNodeApp = app
