// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/slice.d.ts

import { And } from "./and";
import { IsEmptyArray } from "./array";
import { IsEqual } from "./equal";
import { IfGreaterOrEqual, IsGreaterOrEqual } from "./greater-than";
import { If } from "./if";
import { IsArrayIndex } from "./is-array-index";
import { IsLowerThan } from "./lower-than";
import { Abs, IfPositive, IsNegative, ParseNumber } from "./number";
import { Or } from "./or";
import { Push } from "./push";
import { Sum } from "./sum";

type SliceRemovedItemValue = Record<"__type-samurai_internal__", symbol>;

type FilterRemoved<T extends readonly unknown[], Result extends unknown[] = []> = T extends readonly [
	infer First,
	...infer Rest extends unknown[],
]
	? FilterRemoved<Rest, First extends SliceRemovedItemValue ? Result : Push<Result, First>>
	: Result;

/**
 * Type version of `Array.prototype.slice()` method. Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included)
 * @example
 * ```ts
 * // [2, 3]
 * type T0 = Slice<[1, 2, 3, 4], 1>;
 * // [2, 3]
 * type T1 = Slice<[1, 2, 3, 4], 1, 3>;
 * ```
 */
type Slice<
	T extends readonly [] | readonly [unknown, ...unknown[]],
	Start extends number = 0,
	End extends number = T["length"],
> = (
	IsEmptyArray<T> extends true
		? "self"
		: IsGreaterOrEqual<Start, T["length"]> extends true
			? "empty"
			: IsNegative<End> extends true
				? IsGreaterOrEqual<Abs<End>, T["length"]> extends true
					? "empty"
					: [IfPositive<Start, Start, Sum<T["length"], Start>>, Sum<T["length"], End>]
				: And<
							Or<IsEqual<Start, 0>, IsGreaterOrEqual<Abs<Start>, T["length"]>>,
							IsGreaterOrEqual<End, T["length"]>
						> extends true
					? "self"
					: [IfPositive<Start, Start, Sum<T["length"], Start>>, End]
) extends infer Indexes
	? Indexes extends "self"
		? T
		: Indexes extends "empty"
			? []
			: Indexes extends [infer NewStart extends number, infer NewEnd extends number]
				? IfGreaterOrEqual<NewStart, NewEnd> extends true
					? []
					: FilterRemoved<{
							[K in keyof T]: IsArrayIndex<K> extends true
								? If<
										And<IsGreaterOrEqual<ParseNumber<K>, NewStart>, IsLowerThan<ParseNumber<K>, NewEnd>>,
										T[K],
										SliceRemovedItemValue
									>
								: T[K];
						}>
				: T
	: T;
