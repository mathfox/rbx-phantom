export type InferMapKey<T> = T extends ReadonlyMap<infer Key, unknown>
	? Key
	: never;

export type InferMapValue<T> = T extends ReadonlyMap<unknown, infer Value>
	? Value
	: never;

interface PhantomMapConstructor {
	deepEquals(
		this: void,
		...maps: ReadonlyArray<ReadonlyMap<unknown, unknown>>
	): boolean;

	deepMerge<K, V>(...maps: ReadonlyArray<ReadonlyMap<K, V>>): Map<K, V>;

	equals(...maps: ReadonlyArray<unknown>): boolean;

	every<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		predicate: (value: V, key: K, map: ReadonlyMap<K, V>) => unknown,
	): boolean;

	filter<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		predicate: (value: V, key: K, map: ReadonlyMap<K, V>) => unknown,
	): ReadonlyMap<K, V>;

	flatten<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		depth?: number,
	): ReadonlyMap<K, V>;

	flip<K, V>(this: void, map: ReadonlyMap<K, V>): Map<V, K>;

	fromArrays<K, V>(
		this: void,
		keys: ReadonlyArray<K>,
		values: ReadonlyArray<V>,
	): Map<K, V>;

	fromEntries<K, V>(this: void, entries: ReadonlyArray<[K, V]>): Map<K, V>;

	has<K>(
		this: void,
		map: ReadonlyMap<K, unknown>,
		...keys: ReadonlyArray<K>
	): boolean;

	includes<V>(this: void, map: ReadonlyMap<unknown, V>, value: V): boolean;

	isMap(this: void, value: unknown): value is ReadonlyMap<unknown, unknown>;

	map<K, V, K2, V2>(
		this: void,
		map: ReadonlyMap<K, V>,
		mapper: (
			value: V,
			key: K,
			map: ReadonlyMap<K, V>,
		) => LuaTuple<[newValue: V2, newKey: K2] | [newValue: V2]>,
	): Map<K2 | K, V2>;

	map<K, V, V2>(
		this: void,
		map: ReadonlyMap<K, V>,
		mapper: (value: V, key: K, map: ReadonlyMap<K, V>) => V2 | undefined,
	): Map<K, V2>;

	merge<K, V>(this: void, ...maps: ReadonlyArray<ReadonlyMap<K, V>>): Map<K, V>;

	removeKeys<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		...keys: ReadonlyArray<K>
	): Map<K, V>;

	removeValues<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		...values: ReadonlyArray<V>
	): Map<K, V>;

	some<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		predicate: (value: V, key: K, map: ReadonlyMap<K, V>) => unknown,
	): boolean;

	withKeys<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		...keys: ReadonlyArray<K>
	): Map<K, V>;

	keys<K>(this: void, map: ReadonlyMap<K, unknown>): Array<K>;

	values<V>(this: void, map: ReadonlyMap<unknown, V>): Array<V>;

	entries<K, V>(this: void, map: ReadonlyMap<K, V>): Array<[K, V]>;
}

export declare const PhantomMap: PhantomMapConstructor;
