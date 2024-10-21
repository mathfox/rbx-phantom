// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/first-digit.d.ts

import { DigitsTuple } from "./digits-tuple";

/**
 * Returns the first digit of the number argument
 * @example
 * ```ts
 * // 1
 * type Case1 = FirstDigit<123>
 * // -1
 * type Case2 = FirstDigit<-123>
 * ```
 */
export type FirstDigit<T extends number> = DigitsTuple<T> extends readonly [infer First extends number, ...unknown[]]
	? First
	: never;
