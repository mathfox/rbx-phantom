declare function withKeys<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	...keys: ReadonlyArray<TKey>
): Map<TKey, TValue>;

export = withKeys;
