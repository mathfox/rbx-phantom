declare function removeValues<TValue>(
	array: ReadonlyArray<TValue>,
	...values: ReadonlyArray<TValue | undefined>
): Array<TValue>;

export = removeValues;
