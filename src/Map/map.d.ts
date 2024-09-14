declare function map<TKey, TValue, TOutputKey, TOutputValue>(
	map: ReadonlyMap<TKey, TValue>,
	mapper: (value: TValue, key: TKey, mapRef: typeof map) => LuaTuple<[TOutputValue, TOutputKey] | [TOutputValue]>,
): Map<TOutputKey | TKey, TOutputValue>;

declare function map<TKey, TValue, TOutputValue>(
	map: ReadonlyMap<TKey, TValue>,
	mapper: (value: TValue, key: TKey, mapRef: typeof map) => TOutputValue | undefined,
): Map<TKey, TOutputValue>;

export = map;
