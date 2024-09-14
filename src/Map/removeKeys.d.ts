declare function removeKeys<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	...keys: ReadonlyArray<TKey>
): Map<TKey, TValue>;

export = removeKeys;
