export const nonNullish = <T>(
  x: T | null | undefined,
  extraMessage: string,
): T => {
  if (x == null) {
    throw new Error(
      `Unexpected null or undefined. Should exist value. (${extraMessage})`,
    )
  }

  return x
}
