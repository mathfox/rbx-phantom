declare function flatten<TKey, TValue>(map: ReadonlyMap<TKey, TValue>, depth?: number): ReadonlyMap<TKey, TValue>;

export = flatten;
