declare function flatten<TKey, TValue>(map: ReadonlyMap<TKey, TValue>, depth?: number): Map<TKey, TValue>;

export = flatten;
