// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/includes.d.ts

import { IsEmptyArray } from "./array";
import { IfEqual } from "./equal";
import { Shift } from "./shift";

/**
 * Returns a boolean whether the second argument is in the first array argument
 * @example
 * ```ts
 * // true
 * type Case1 = Includes<[1, 2, 3], 1>
 * // false
 * type Case1 = Includes<[1, 2, 3], 4>
 * ```
 */
export type Includes<T extends readonly unknown[], Pivot> = IsEmptyArray<T> extends true
	? false
	: Shift<T, { includeRemoved: true }> extends [infer Rest extends readonly unknown[], infer Removed]
		? IfEqual<Pivot, Removed, true, Includes<Rest, Pivot>>
		: false;
