/**
 * Returns a set of values that are in the first set, but not in the other sets.
 */
declare function difference<T>(set: ReadonlySet<T>, ...otherSets: ReadonlyArray<ReadonlySet<T> | undefined>): Set<T>;

export = difference;
