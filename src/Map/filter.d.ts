declare function filter<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	predicate: (value: TValue, key: TKey, mapRef: typeof map) => unknown,
): ReadonlyMap<TKey, TValue>;

export = filter;
