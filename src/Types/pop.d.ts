// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/pop.d.ts

import { IsEmptyArray } from "./array";
import { If } from "./if";

type PopOptions = {
	includeRemoved: boolean;
};

/**
 * Removes last element from the first array argument.
 * If the `includeRemoved` option is `true` return removed element with the new array in the format of [rest, removed]
 * @example
 * ```ts
 * // [1, 2]
 * type Case1 = Pop<[1, 2, 3]>
 * // [[1, 2], 3]
 * type Case2 = Pop<[1, 2, 3], {includeRemoved: true}>
 * ```
 */
export type Pop<
	T extends readonly unknown[],
	Options extends PopOptions = {
		includeRemoved: false;
	},
> = IsEmptyArray<T> extends true
	? never
	: T extends readonly [...infer Rest extends readonly unknown[], infer Removed]
		? If<Options["includeRemoved"], [Rest, Removed], Rest>
		: never;
