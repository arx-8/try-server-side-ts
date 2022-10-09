import express from "express"
import { SERVER_PORT } from "src/constants/env"
import { indexGet } from "src/handlers"

const app = express()

app.get("/", indexGet)

const server = app.listen(SERVER_PORT, () => {
  console.log(`⚡️ Server is running on port ${SERVER_PORT}!`)
})

/**
 * For Docker graceful shutdown
 */
const shutdownGraceful: NodeJS.SignalsListener = (signal) => {
  console.log(`⚡️ Received signal to terminate: ${signal}`)
  server.close(() => {
    console.log("⚡️ Server terminated gracefully.")
    process.exit()
  })
}
process.on("SIGINT", shutdownGraceful)
process.on("SIGTERM", shutdownGraceful)
