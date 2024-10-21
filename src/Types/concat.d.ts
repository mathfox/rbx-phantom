// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/concat.d.ts

/**
 * Type version of `Array.prototype.concat()`. Concatenates two arrays into one.
 * @example
 * ```ts
 * // [number, number, string, string]
 * type Result = Concat<[number, number], [string, string]>
 * ```
 */
export type Concat<T extends readonly unknown[], U> = [...T, ...(U extends readonly unknown[] ? U : [U])];
