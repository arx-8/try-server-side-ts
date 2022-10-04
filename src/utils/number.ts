/**
 * This file implements the function related to Number type
 */

/**
 * `NaN` safety to-number.
 * `NaN` cannot be detected by static analysis. Therefore, `NaN` is returned as `undefined`, which is easier to analyze statically.
 */
export const toNumber = (s: string): number | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (s.trim().length === 0) {
    return
  }

  // Disallow abbreviated notation of decimals.
  // e.g.
  // - Number("1.") // 1
  // - Number(".1") // 0.1
  if (s.startsWith(".")) {
    return
  }
  if (s.endsWith(".")) {
    return
  }

  const n = Number(s)
  if (Number.isNaN(n)) {
    return
  }
  return n
}
