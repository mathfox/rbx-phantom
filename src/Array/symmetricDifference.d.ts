declare function symmetricDifference<TValue>(
	...values: ReadonlyArray<ReadonlyArray<TValue> | undefined>
): Array<TValue>;

export = symmetricDifference;
