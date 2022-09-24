import type {
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteHandlerMethod,
} from "fastify"
import _ from "lodash"
import sum from "lodash/sum"

type Reply = {
  hello: string
}

export const indexGet: RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  {
    Reply: Reply
  }
> = (_, rep) => {
  // console.log(_)
  console.log(sum([1, 2, 3]))
  rep.type("application/json").code(200)
  return {
    hello: "world",
  }
}
