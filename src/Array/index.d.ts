export type InferArrayValue<T> = T extends ReadonlyArray<infer Value>
	? Value
	: never;

interface PhantomArrayConstructor {
	/**
	 * @param index 0-based index
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
	 */
	at<T>(this: void, array: ReadonlyArray<T>, index: number): T | undefined;

	/**
	 * This function preserves sparse arrays such as { nil, nil, 3 } will become { nil, nil, 3, 4} when concatenated with 4.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
	 */
	concat<T>(
		this: void,
		array: ReadonlyArray<T>,
		...items: ReadonlyArray<ReadonlyArray<T> | T | undefined>
	): Array<T>;

	/**
	 * This function will exit early with `false` if any of the values is not an array.
	 */
	deepEquals(...value: ReadonlyArray<unknown>): boolean;

	freezeDeep<T>(array: ReadonlyArray<T>): ReadonlyDeep<T[]>;

	deepClone<T>(array: ReadonlyArray<T>): Array<T>;

	/**
	 * Returns an array of values that are in the first array, but not in the other arrays.
	 */
	difference<T>(
		this: void,
		array: ReadonlyArray<T>,
		...otherArrays: ReadonlyArray<ReadonlyArray<T>>
	): Array<T>;

	keys<T>(this: void, array: ReadonlyArray<T>): Array<number>;
	values<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	freeze<T>(this: void, array: Array<T>): ReadonlyArray<T>;

	isArray(this: void, value: unknown): value is Array<unknown>;
}

export declare const PhantomArray: PhantomArrayConstructor;

declare namespace PhantomArrayName {
	export function concat<T>(...arrays: T[]): T;

	export function concatDeep<T>(...arrays: T[]): T;

	export function copyDeep<T>(array: T): T;

	export function difference<T>(array: T[], ...values: T[]): T[];

	export function differenceSymmetric<T>(array: T[], ...values: T[]): T[];

	export function equals(...arrays: unknown[]): boolean;

	export function every<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): boolean;

	export function filter<T>(
		array: T[],
		filterer?: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): T[];

	export function find<T>(
		array: T[],
		value?: T,
		from?: number,
	): number | undefined;

	export function findLast<T>(
		array: T[],
		value?: T,
		from?: number,
	): number | undefined;

	export function findWhere<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
		from?: number,
	): number | undefined;

	export function findWhereLast<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
		from?: number,
	): number;

	export function flatten<T>(array: T[], depth?: number): T[];

	export function includes<T>(array: T[], value: T, from?: number): boolean;

	export function insert<T>(array: T[], index: number, ...values: T[]): T[];

	export function last<T>(array: T[]): T;

	export function map<T extends object, U>(
		array: T,
		mapper: (value: T[keyof T], index: number, array: Readonly<T>) => U,
	): U[];

	export function pop<T>(array: T[], count?: number): T[];

	export function push<T>(array: T[], ...values: T[]): T[];

	export function reduce<T, U extends T>(
		array: T[],
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: Readonly<T[]>,
		) => U,
		initialValue?: U,
	): U;

	export function reduceRight<T, U extends T>(
		array: T[],
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: Readonly<T[]>,
		) => U,
		initialValue?: U,
	): U;

	export function removeIndex<T>(array: T[], index: number): T[];

	export function removeIndices<T>(array: T[], ...indices: number[]): T[];

	export function removeValue<T>(array: T[], value: T): T[];

	export function removeValues<T>(array: T[], ...values: T[]): T[];

	export function reverse<T>(array: T[]): T[];

	export function set<T>(array: T[], index: number, value: T): T[];

	export function shift<T>(array: T[], count?: number): T[];

	export function shuffle<T>(array: T[]): T[];

	export function slice<T>(array: T[], from?: number, to?: number): T[];

	export function some<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): boolean;

	export function sort<T>(
		array: T[],
		comparator?: (a: T, b: T) => unknown,
	): T[];

	export function splice<T>(
		array: T[],
		start?: number,
		end?: number,
		...values: T[]
	): T[];

	export function toSet<T>(array: T[]): Set<T>;

	export function unshift<T>(array: T[], ...values: T[]): T[];

	export function update<T>(
		array: T[],
		index: number,
		updater?: (value: T, index: number) => T,
		callback?: (index: number) => T,
	): T[];

	export function zip<T extends unknown[][]>(
		...arrays: T
	): {
		[K in keyof T]: T[K] extends (infer V)[] ? V : never;
	}[];

	export function zipAll<T extends unknown[][]>(
		...arrays: T
	): {
		[K in keyof T]: ReplaceType<
			T[K] extends (infer V)[] ? V : never,
			undefined,
			PhantomNone
		>;
	}[];
}
