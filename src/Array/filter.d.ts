export default function filter<T>(
	array: ReadonlyArray<T>,
	filterer: (value: T, index: number, array: ReadonlyArray<T>) => unknown,
): Array<T>;
