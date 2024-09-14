/**
 * Returns a set of values that are in the first set, but not in the other sets, and vice versa.
 * Simply speaking, this returns a unique entries in the sets provided.
 */
declare function symmetricDifference<TValue>(...sets: ReadonlyArray<ReadonlySet<TValue> | undefined>): Set<TValue>;

export = symmetricDifference;
