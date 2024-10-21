// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/is-string-literal.d.ts

/**
 * Returns a boolean whether the passed argument is literal string
 * @example
 * ```ts
 * // true
 * type Case1 = IsStringLiteral<'a'>
 * // false
 * type Case2 = IsStringLiteral<string>
 * ```
 */
export type IsStringLiteral<T extends string> = string extends T ? false : true;
