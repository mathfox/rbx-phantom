declare function reduce<TValue, TOutput>(
	array: ReadonlyArray<TValue>,
	reducer: (accumulator: TOutput, value: TValue, index: number, arrayRef: typeof array) => TOutput,
	initialValue?: TOutput | undefined,
): TOutput;

export = reduce;
