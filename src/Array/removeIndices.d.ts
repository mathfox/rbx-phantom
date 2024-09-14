declare function removeIndices<TValue>(
	array: ReadonlyArray<TValue>,
	...indices: ReadonlyArray<number | undefined>
): Array<TValue>;

export = removeIndices;
