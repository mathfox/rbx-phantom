declare function findWhere<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (value: TValue, index: number, arrayRef: typeof array) => unknown,
	from?: number,
): number | undefined;

export = findWhere;
