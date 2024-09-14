declare function deepMerge<TKey, TValue>(
	...maps: ReadonlyArray<ReadonlyMap<TKey, TValue> | undefined>
): Map<TKey, TValue>;

export = deepMerge;
