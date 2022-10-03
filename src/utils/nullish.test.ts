import { expectType } from "tsd"
import { nonNullish } from "./nullish"

describe("nonNullish", () => {
  it("ok", () => {
    expect.hasAssertions()

    // ## Arrange ##
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maybe: string | undefined = "hello" as any

    // ## Act ##
    // ## Assert ##
    expectType<string>(nonNullish(maybe, "why"))
    expect(nonNullish(maybe, "why")).toStrictEqual("hello")
  })

  it("ng", () => {
    expect.hasAssertions()

    // ## Arrange ##
    type SomeObject = {
      id: string
      nested: {
        a: string
      }
      rate: number
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maybe: SomeObject | undefined = undefined as any

    // ## Act ##
    // ## Assert ##
    expect(() => {
      expectType<SomeObject>(nonNullish(maybe, "why"))
    }).toThrowErrorMatchingInlineSnapshot(
      `"Unexpected null or undefined. Should exist value. (why)"`,
    )
  })
})
