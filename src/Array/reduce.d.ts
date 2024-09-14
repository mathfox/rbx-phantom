declare function reduce<T, U>(
	array: ReadonlyArray<T>,
	reducer: (accumulator: U, value: T, index: number, array: ReadonlyArray<T>) => U,
	initialValue?: U,
): U;

export = reduce;
