import { config } from "dotenv"
import { nonNullish } from "src/utils/nullish"

config()

export const DB_HOST = nonNullish(
  process.env["DB_HOST"],
  `env of "DB_HOST" is not defined. Did you forget a definition in your ".env"?`
)
export const DB_PORT = nonNullish(
  process.env["DB_PORT"],
  `env of "DB_PORT" is not defined. Did you forget a definition in your ".env"?`
)
export const DB_USER = nonNullish(
  process.env["DB_USER"],
  `env of "DB_USER" is not defined. Did you forget a definition in your ".env"?`
)
export const DB_PASSWORD = nonNullish(
  process.env["DB_PASSWORD"],
  `env of "DB_PASSWORD" is not defined. Did you forget a definition in your ".env"?`
)
