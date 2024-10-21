// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/not.d.ts

/**
 * Accepts a boolean and returns `true` if the passed type is `false`, otherwise returns `true`
 * @example
 * ```ts
 * // false
 * type Case1 = Not<true>
 * // true
 * type Case2 = Not<false>
 * ```
 */
export type Not<T extends boolean> = T extends true ? false : true;
