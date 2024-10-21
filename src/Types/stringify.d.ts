// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/stringify.d.ts

/**
 * Transform numbers, booleans, strings, bigints to string.
 * ```ts
 * // 'true'
 * type Result = Stringify<true>
 *
 * ```
 */
export type Stringify<T> = T extends number | boolean | string | bigint ? `${T}` : never;
