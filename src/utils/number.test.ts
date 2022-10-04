import { toNumber } from "./number"

describe("toNumber", () => {
  it("number like", () => {
    expect.hasAssertions()

    expect(toNumber("0")).toStrictEqual(0)
    expect(toNumber("1")).toStrictEqual(1)
    expect(toNumber("-1")).toStrictEqual(-1)
    expect(toNumber("+1")).toStrictEqual(1)
    expect(toNumber("1.1")).toStrictEqual(1.1)
  })

  it("no number", () => {
    expect.hasAssertions()

    expect(toNumber("")).toStrictEqual(undefined)
    expect(toNumber(" ")).toStrictEqual(undefined)
    expect(toNumber("　")).toStrictEqual(undefined)
    expect(toNumber("\t")).toStrictEqual(undefined)
    expect(toNumber("a")).toStrictEqual(undefined)
    expect(toNumber("- 1")).toStrictEqual(undefined)
    expect(toNumber("+ 1")).toStrictEqual(undefined)
    expect(toNumber("1,000")).toStrictEqual(undefined)
    expect(toNumber(".1.")).toStrictEqual(undefined)
    expect(toNumber("1.")).toStrictEqual(undefined)
    expect(toNumber(".1")).toStrictEqual(undefined)
    expect(toNumber("..1..")).toStrictEqual(undefined)
    expect(toNumber("1..")).toStrictEqual(undefined)
    expect(toNumber("..1")).toStrictEqual(undefined)
  })
})
