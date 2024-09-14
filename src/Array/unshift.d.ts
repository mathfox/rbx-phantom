declare function unshift<TValue>(
	array: ReadonlyArray<TValue>,
	...values: ReadonlyArray<TValue | undefined>
): Array<TValue>;

export = unshift;
