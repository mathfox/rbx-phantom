// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/unshift.d.ts

/**
 * Adds the second argument to the beginning of the first array argument.
 * @example
 * ```ts
 * // ['foo', 'bar']
 * type Result = Unshift<['bar'], 'foo'>
 * ```
 */
export type Unshift<T extends readonly unknown[], U> = [U, ...T];
