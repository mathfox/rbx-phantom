declare function removeValues<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
	...values: ReadonlyArray<TValue>
): Map<TKey, TValue>;

export = removeValues;
