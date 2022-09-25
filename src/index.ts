import Fastify from "fastify"
import _ from "lodash"
import sortBy from "lodash/sortBy"

const app = Fastify()

app.get("/", (_req, rep) => {
  // console.log(_)
  console.log(sortBy)
  rep.type("application/json").code(200)
  return {
    hello: "world",
  }
})

const port = 3000
app.listen({ port }, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}!`)
})
