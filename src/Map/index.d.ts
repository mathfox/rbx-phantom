declare namespace PhantomMap {
	export {};

	export type {};
}

interface PhantomMapConstructor {
	deepEquals(this: void, ...maps: ReadonlyArray<ReadonlyMap<unknown, unknown>>): boolean;

	deepMerge<K, V>(...maps: ReadonlyArray<ReadonlyMap<K, V>>): Map<K, V>;

	equals(...maps: ReadonlyArray<unknown>): boolean;

	flip<K, V>(this: void, map: ReadonlyMap<K, V>): Map<V, K>;

	map<K, V, K2, V2>(
		this: void,
		map: ReadonlyMap<K, V>,
		mapper: (value: V, key: K, map: ReadonlyMap<K, V>) => LuaTuple<[newValue: V2, newKey: K2] | [newValue: V2]>,
	): Map<K2 | K, V2>;

	map<K, V, V2>(
		this: void,
		map: ReadonlyMap<K, V>,
		mapper: (value: V, key: K, map: ReadonlyMap<K, V>) => V2 | undefined,
	): Map<K, V2>;

	merge<K, V>(this: void, ...maps: ReadonlyArray<ReadonlyMap<K, V>>): Map<K, V>;

	some<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
		predicate: (value: V, key: K, map: ReadonlyMap<K, V>) => unknown,
	): boolean;

	keys<K>(this: void, map: ReadonlyMap<K, unknown>): Array<K>;

	values<V>(this: void, map: ReadonlyMap<unknown, V>): Array<V>;

	entries<K, V>(this: void, map: ReadonlyMap<K, V>): Array<[K, V]>;
}

export = PhantomMap;
