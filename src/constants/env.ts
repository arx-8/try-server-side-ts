import { config } from "dotenv"
import { nonNullish } from "src/utils/nullish"
import { toNumber } from "src/utils/number"

config()

export const DB_DATABASE = nonNullish(
  process.env["DB_DATABASE"],
  `env of "DB_DATABASE" is not defined. Did you forget a definition in your ".env"?`
)
export const DB_HOST = nonNullish(
  process.env["DB_HOST"],
  `env of "DB_HOST" is not defined. Did you forget a definition in your ".env"?`
)
export const DB_PORT = nonNullish(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  toNumber(process.env["DB_PORT"]!),
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
