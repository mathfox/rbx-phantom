export type InferArrayValue<T> = T extends ReadonlyArray<infer Value>
	? Value
	: never;

export type UnknownArray = Array<unknown>;

interface PhantomArrayConstructor {
	/**
	 * @param index 0-based index
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
	 */
	at<T>(this: void, array: ReadonlyArray<T>, index: number): T | undefined;

	/**
	 * This function preserves order, so sparse arrays such as { nil, nil, 3 } will become { nil, nil, 3, 4} when concatenated with 4.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
	 */
	concat<T>(
		this: void,
		array: ReadonlyArray<T>,
		...values: ReadonlyArray<ReadonlyArray<T> | T | undefined>
	): Array<T>;

	/**
	 * This function will exit early with `false` if any of the values is not an array.
	 */
	deepEquals(this: void, ...values: ReadonlyArray<unknown>): boolean;

	/**
	 * Returns an array of values that are in the first array, but not in the other arrays.
	 */
	difference<T>(
		this: void,
		array: ReadonlyArray<T>,
		...otherArrays: ReadonlyArray<ReadonlyArray<T>>
	): Array<T>;

	entries<T>(this: void, array: ReadonlyArray<T>): ReadonlyArray<[number, T]>;

	equals(this: void, ...arrays: ReadonlyArray<unknown>): boolean;

	every<T>(
		this: void,
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
	): boolean;

	filter<T>(
		this: void,
		array: ReadonlyArray<T>,
		filterer: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
	): Array<T>;

	find<T>(
		this: void,
		array: ReadonlyArray<T>,
		value: T,
		from?: number,
	): number | undefined;

	findLast<T>(
		this: void,
		array: ReadonlyArray<T>,
		value: T,
		from?: number,
	): number | undefined;

	findWhere<T>(
		this: void,
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
		from?: number,
	): number | undefined;

	findWhereLast<T>(
		this: void,
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
		from?: number,
	): number | undefined;

	flatten<T>(
		this: void,
		array: ReadonlyArray<T>,
		depth?: number,
	): ReadonlyArray<T>;

	includes<T>(
		this: void,
		array: ReadonlyArray<T>,
		value: T,
		from?: number,
	): boolean;

	isArray(this: void, value: unknown): value is ReadonlyArray<unknown>;

	keys(this: void, array: ReadonlyArray<unknown>): Array<number>;

	map<T, U>(
		this: void,
		array: ReadonlyArray<T>,
		mapper: (value: T, index: number, array: ReadonlyArray<T>) => U,
	): Array<U>;

	pop<T>(this: void, array: ReadonlyArray<T>, count?: number): Array<T>;

	push<T>(
		this: void,
		array: ReadonlyArray<T>,
		...values: ReadonlyArray<T>
	): Array<T>;

	reduce<T, U>(
		this: void,
		array: ReadonlyArray<T>,
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: ReadonlyArray<T>,
		) => U,
		initialValue?: U,
	): U;

	reduceRight<T, U>(
		this: void,
		array: ReadonlyArray<T>,
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: ReadonlyArray<T>,
		) => U,
		initialValue?: U,
	): U;

	removeIndices<T>(
		this: void,
		array: ReadonlyArray<T>,
		...indices: ReadonlyArray<number>
	): Array<T>;

	removeValues<T>(
		this: void,
		array: ReadonlyArray<T>,
		...values: ReadonlyArray<T>
	): Array<T>;

	reverse<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	shift<T>(this: void, array: ReadonlyArray<T>, count?: number): Array<T>;

	shuffle<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	slice<T>(
		this: void,
		array: ReadonlyArray<T>,
		from?: number,
		to?: number,
	): Array<T>;

	some<T>(
		this: void,
		array: ReadonlyArray<T>,
		predicate: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
	): boolean;

	strictIsArray(this: void, value: object): boolean;

	symmetricDifference<T>(
		this: void,
		...values: ReadonlyArray<ReadonlyArray<T>>
	): Array<T>;

	toSet<T>(this: void, array: ReadonlyArray<T>): Set<T>;

	unshift<T>(
		this: void,
		array: ReadonlyArray<T>,
		...values: ReadonlyArray<T>
	): Array<T>;

	deepClone<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	safeFreeze<T>(this: void, array: ReadonlyArray<T>): ReadonlyArray<T>;

	values<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	deepCompareArray(
		this: void,
		a: ReadonlyArray<unknown>,
		b: ReadonlyArray<unknown>,
	): boolean;
}

export declare const PhantomArray: PhantomArrayConstructor;
