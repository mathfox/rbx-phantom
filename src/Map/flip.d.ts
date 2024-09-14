declare function flip<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Map<TValue, TKey>;

export = flip;
