declare function every<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (value: TValue, index: number, arrayRef: typeof array) => unknown,
): boolean;

export = every;
