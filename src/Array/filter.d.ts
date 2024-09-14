declare function filter<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (value: TValue, index: number, arrayRef: typeof array) => unknown,
): Array<TValue>;

export = filter;
