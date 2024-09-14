declare function some<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (value: TValue, index: number, arrayRef: typeof array) => unknown,
): boolean;

export = some;
