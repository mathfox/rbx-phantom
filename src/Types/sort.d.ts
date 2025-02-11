// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/sort.d.ts

import { Decrement } from "./decrement";
import { IsEqual } from "./equal";
import { IsGreaterThan } from "./greater-than";
import { Increment } from "./increment";
import { IsLowerOrEqual, IsLowerThan } from "./lower-than";
import { Swap } from "./swap";

type _SortSingle<
	Result extends readonly [] | readonly [number, ...number[]] | readonly [...number[], number],
	PivotIndex extends number,
	CurrentIndex extends number,
> = IsEqual<PivotIndex, CurrentIndex> extends true
	? Result
	: Increment<CurrentIndex> extends infer NextCurrentIndex extends number
		? _SortSingle<
				IsGreaterThan<Result[CurrentIndex], Result[NextCurrentIndex]> extends true
					? Swap<Result, CurrentIndex, NextCurrentIndex> extends infer NewResult extends
							| readonly []
							| readonly [number, ...number[]]
						? NewResult
						: Result
					: Result,
				PivotIndex,
				NextCurrentIndex
			>
		: never;

type _Sort<T extends readonly [] | readonly [number, ...number[]], CurrentIndex extends number> = IsLowerOrEqual<
	CurrentIndex,
	0
> extends true
	? T
	: _SortSingle<T, CurrentIndex, 0> extends infer NewT extends readonly [] | readonly [number, ...number[]]
		? _Sort<NewT, Decrement<CurrentIndex>>
		: T;

/**
 * Sorts a tuple of numbers in ascending order.
 * @example
 * ```ts
 * // [1, 2, 3]
 * type T0 = Sort<[3, 2, 1]>;
 *
 * // [-1, 0, 1]
 * type T1 = Sort<[1, -1, 0]>;
 * ```
 */
export type Sort<T extends readonly [] | readonly [number, ...number[]]> = IsLowerThan<T["length"], 2> extends true
	? T
	: _Sort<T, Decrement<T["length"]>>;
