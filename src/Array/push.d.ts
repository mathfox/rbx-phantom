/**
 * Creates a new array with a new values pushed into it.
 *
 * Filters out the `undefined` values.
 */
declare function push<TValue>(
	array: ReadonlyArray<TValue>,
	...values: ReadonlyArray<TValue | undefined>
): Array<TValue>;

export = push;
