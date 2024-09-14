declare function some<K, V>(
	map: ReadonlyMap<K, V>,
	predicate: (value: V, key: K, map: ReadonlyMap<K, V>) => unknown,
): boolean;

export = some;
