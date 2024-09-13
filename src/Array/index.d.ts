import type at from "./at";
import type concat from "./concat";
import type deepEquals from "./deepEquals";
import type difference from "./difference";
import type entries from "./entries";
import type equals from "./equals";
import type every from "./every";
import type find from "./find";

export type InferArrayValue<TInput> = TInput extends ReadonlyArray<infer TValue> ? TValue : never;

export type UnknownArray = Array<unknown>;

interface PhantomArrayConstructor {
	at: typeof at;
	concat: typeof concat;
	deepEquals: typeof deepEquals;
	difference: typeof difference;
	entries: typeof entries;
	equals: typeof equals;
	every: typeof every;
	find: typeof find;
}

export declare const PhantomArray: PhantomArrayConstructor;

export declare namespace PhantomArray2 {
	function findLast<T>(array: ReadonlyArray<T>, value: T, from?: number): number | undefined;

	function findWhere<T>(
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
		from?: number,
	): number | undefined;

	function findWhereLast<T>(
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
		from?: number,
	): number | undefined;

	function flatten<T>(array: ReadonlyArray<T>, depth?: number): ReadonlyArray<T>;

	function includes<T>(array: ReadonlyArray<T>, value: T, from?: number): boolean;

	function keys(array: ReadonlyArray<unknown>): Array<number>;

	function map<T, U>(
		array: ReadonlyArray<T>,
		mapper: (value: T, index: number, array: ReadonlyArray<T>) => U,
	): Array<U>;

	function pop<T>(array: ReadonlyArray<T>, count?: number): Array<T>;

	function push<T>(array: ReadonlyArray<T>, ...values: ReadonlyArray<T>): Array<T>;

	function reduce<T, U>(
		array: ReadonlyArray<T>,
		reducer: (accumulator: U, value: T, index: number, array: ReadonlyArray<T>) => U,
		initialValue?: U,
	): U;

	function reduceRight<T, U>(
		array: ReadonlyArray<T>,
		reducer: (accumulator: U, value: T, index: number, array: ReadonlyArray<T>) => U,
		initialValue?: U,
	): U;

	function removeIndices<T>(array: ReadonlyArray<T>, ...indices: ReadonlyArray<number>): Array<T>;

	function removeValues<T>(array: ReadonlyArray<T>, ...values: ReadonlyArray<T>): Array<T>;

	function reverse<T>(array: ReadonlyArray<T>): Array<T>;

	function shift<T>(array: ReadonlyArray<T>, count?: number): Array<T>;

	function shuffle<T>(array: ReadonlyArray<T>): Array<T>;

	function slice<T>(array: ReadonlyArray<T>, from?: number, to?: number): Array<T>;

	function some<T>(
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
	): boolean;

	function strictIsArray(value: object): boolean;

	function symmetricDifference<T>(...values: ReadonlyArray<ReadonlyArray<T>>): Array<T>;

	function toSet<T>(array: ReadonlyArray<T>): Set<T>;

	function unshift<T>(array: ReadonlyArray<T>, ...values: ReadonlyArray<T>): Array<T>;

	function deepClone<T>(array: ReadonlyArray<T>): Array<T>;

	function safeFreeze<T>(array: ReadonlyArray<T>): ReadonlyArray<T>;

	function values<T>(array: ReadonlyArray<T>): Array<T>;

	function deepCompareArray(a: ReadonlyArray<unknown>, b: ReadonlyArray<unknown>): boolean;
}

export default PhantomArray;
