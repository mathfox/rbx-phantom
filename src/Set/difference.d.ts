/**
 * Returns a set of values that are in the first set, but not in the other sets.
 */
declare function difference<TValue>(
	set: ReadonlySet<TValue>,
	...otherSets: ReadonlyArray<ReadonlySet<TValue> | undefined>
): Set<TValue>;

export = difference;
