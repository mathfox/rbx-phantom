/**
 * Inserts values to the beginning of an array.
 */
declare function unshift<TValue>(
	array: ReadonlyArray<TValue>,
	...values: ReadonlyArray<TValue | undefined>
): Array<TValue>;

export = unshift;
