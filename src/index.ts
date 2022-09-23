import express from "express"
import { indexGet } from "~/src/handlers"

const app = express()

app.get("/", indexGet)

const port = 30001
const server = app.listen(port, () => {
  console.log(`⚡️ Server is running on port ${port}!`)
})

// For Docker graceful shutdown
const shutdownGraceful: NodeJS.SignalsListener = (signal) => {
  console.log(`⚡️ Received signal to terminate: ${signal}`)
  server.close(() => {
    console.log("⚡️ Server terminated gracefully.")
    process.exit()
  })
}
process.on("SIGINT", shutdownGraceful)
process.on("SIGTERM", shutdownGraceful)
