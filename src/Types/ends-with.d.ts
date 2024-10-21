// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/ends-with.d.ts

/**
 * Returns a boolean whether the first string argument ends with the second one
 * @example
 * ```ts
 * // true
 * type Result = EndsWith<'Foobar', 'bar'>
 * ```
 */
export type EndsWith<T extends string, Characters extends string> = T extends `${string}${Characters}` ? true : false;
