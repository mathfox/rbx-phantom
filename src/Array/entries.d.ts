/**
 * The returned entries use 0-based indexes.
 */
declare function entries<TValue>(array: ReadonlyArray<TValue>): ReadonlyArray<[number, TValue]>;

export = entries;
