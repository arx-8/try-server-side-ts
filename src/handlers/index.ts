import type { RequestHandler } from "express"
import type { DIContainer } from "src/data/database/di"

export const indexGet =
  ({ organizationRepository }: DIContainer): RequestHandler<never, string> =>
  async (_, res) => {
    const org = await organizationRepository.create()
    console.log("indexGet called")
    res.send(`Hello, ${org.name} !`)
  }
