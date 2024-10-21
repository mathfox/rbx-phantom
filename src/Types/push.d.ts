// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/push.d.ts

/**
 * Pushes the second argument to the first array argument
 * @example
 * ```ts
 * // [1, 2, 3, 4, 5]
 * type Case1 = Push<[1, 2, 3, 4], 5>
 * ```
 */
export type Push<T extends readonly unknown[], U extends unknown> = [...T, U];
