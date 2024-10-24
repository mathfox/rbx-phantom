// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/starts-with.d.ts

/**
 * Returns a boolean whether the first string arguments starts with the second string argument
 * @example
 * ```ts
 * // true
 * type Case1 = StartsWith<'abc', 'a'>
 * // false
 * type Case2 = StartsWith<'abc', 'b'>
 * ```
 */
export type StartsWith<Str extends string, Pivot extends string | number> = Str extends `${Pivot}${string}`
	? true
	: false;
