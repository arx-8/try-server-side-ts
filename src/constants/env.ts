import { config } from "dotenv"
import { nonNullish } from "src/utils/nullish"

const isTest = process.env["NODE_ENV"] === "test"
config({
  path: isTest ? ".env.test" : ".env",
})

export const SERVER_PORT = nonNullish(
  process.env["SERVER_PORT"],
  `env of "SERVER_PORT" is not defined. Did you forget to define it in your ".env"?`
)
