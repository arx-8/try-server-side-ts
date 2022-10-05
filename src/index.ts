import express from "express"
import { connectDB } from "src/data/database"
import type { DIContainer } from "src/data/database/di"
import { newOrganizationRepository } from "src/data/database/repositories/organizationRepository"
import { indexGet } from "src/handlers"

const main = async (): Promise<void> => {
  // prepare DI
  await connectDB()
  const container: DIContainer = {
    organizationRepository: newOrganizationRepository(),
  }

  // define server
  const app = express()
  app.get("/", indexGet(container))

  // run server
  const port = 30001
  const server = app.listen(port, () => {
    console.log(`⚡️ Server is running on port ${port}!`)
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
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
