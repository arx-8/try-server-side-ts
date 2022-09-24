import Fastify from "fastify"
import { indexGet } from "src/handlers"

const app = Fastify({
  logger: true,
})

app.get("/", indexGet)

/**
 * Need to explicitly give host for Docker
 * @see https://github.com/fastify/fastify/issues/935#issuecomment-388569718
 */
const host = "0.0.0.0"
const port = 30001
app.listen({ port, host }, (err, address) => {
  if (err) throw err
  console.log(`⚡️ Server is now listening on ${address} !`)
})

/**
 * For Docker graceful shutdown
 */
const shutdownGraceful: NodeJS.SignalsListener = (signal) => {
  console.log(`⚡️ Received signal to terminate: ${signal}`)
  app.close().then(() => {
    console.log("⚡️ Server terminated gracefully.")
    process.exit()
  })
}
process.on("SIGINT", shutdownGraceful)
process.on("SIGTERM", shutdownGraceful)
