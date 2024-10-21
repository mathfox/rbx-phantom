// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/shift.d.ts

import { If } from "./if";

type ShiftOptions = {
	includeRemoved: boolean;
};

/**
 * Removes the first element from the first array argument.
 * If the `includeRemoved` option is `true` return removed element with the new array in the format of [rest, removed]
 * @example
 * ```ts
 * // [2, 3]
 * type Case1 = Shift<[1, 2, 3]>
 * // [[2, 3], 1]
 * type Case2 = Shift<[1, 2, 3], {includeRemoved: true}>
 * ```
 */
export type Shift<
	T extends readonly unknown[],
	Options extends ShiftOptions = { includeRemoved: false },
> = T extends readonly [infer Removed, ...infer Rest extends readonly unknown[]]
	? If<Options["includeRemoved"], [Rest, Removed], Rest>
	: never;
