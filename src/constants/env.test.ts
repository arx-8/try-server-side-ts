import { SERVER_PORT } from "./env"

describe("dot env load", () => {
  it(".env.example loaded", () => {
    expect(SERVER_PORT).toStrictEqual("0")
  })
})
