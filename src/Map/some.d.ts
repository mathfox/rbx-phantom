declare function some<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	predicate: (value: TValue, key: TKey, mapRef: typeof map) => unknown,
): boolean;

export = some;
