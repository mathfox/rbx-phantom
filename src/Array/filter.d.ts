declare function filter<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (value: TValue, index: number, array: ReadonlyArray<TValue>) => unknown,
): Array<TValue>;

export = filter;
