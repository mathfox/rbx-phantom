/**
 * If the value is `None`, it will be removed from the result.
 */
declare function merge<TKey, TValue>(...maps: ReadonlyArray<ReadonlyMap<TKey, TValue> | undefined>): Map<TKey, TValue>;

export = merge;
