declare function filter<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	predicate: (value: TValue, key: TKey, mapRef: typeof map) => unknown,
): Map<TKey, TValue>;

export = filter;
