declare function map<T, U>(
	array: ReadonlyArray<T>,
	mapper: (value: T, index: number, array: ReadonlyArray<T>) => U,
): Array<U>;

export = map;
