declare function every<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	predicate: (value: TValue, key: TKey, mapRef: typeof map) => unknown,
): boolean;

export = every;
