declare function merge<TKey, TValue>(...maps: ReadonlyArray<ReadonlyMap<TKey, TValue>>): Map<TKey, TValue>;

export = merge;
