/**
 * Returns an array of values that are in the first array, but not in the other arrays.
 */
declare function difference<TValue>(
	array: ReadonlyArray<TValue>,
	...otherArrays: ReadonlyArray<ReadonlyArray<TValue>>
): Array<TValue>;

export = difference;
