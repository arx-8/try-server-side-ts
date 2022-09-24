import Fastify from "fastify"
import { indexGet } from "src/handlers"

const app = Fastify({
  logger: true,
})

app.get("/", indexGet)

const port = 3000
app.listen({ port }, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}!`)
})
