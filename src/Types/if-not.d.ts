// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/if-not.d.ts

import { If } from "./if";

/**
 * Returns the second argument if the first argument is `false` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // valid
 * type Case1 = IfNot<false, 'valid'>
 * // invalid
 * type Case2 = IfNot<false, 'valid', 'invalid'>
 * ```
 */
export type IfNot<Condition, IfTrue = true, IfFalse = false> = If<Condition, IfFalse, IfTrue>;
