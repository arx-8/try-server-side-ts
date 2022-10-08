import express from "express"
import { indexGet } from "src/handlers/index"

const app = express()

app.get("/", indexGet)

app.listen(3000, () => {
  console.log("Example app listening on port 3000!")
})
