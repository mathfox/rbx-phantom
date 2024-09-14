declare function map<TValue, TOutput>(
	array: ReadonlyArray<TValue>,
	mapper: (value: TValue, index: number, arrayRef: typeof array) => TOutput | undefined,
): Array<TOutput>;

export = map;
