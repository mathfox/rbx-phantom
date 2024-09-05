export default function every<TValue>(
	array: ReadonlyArray<TValue>,
	predicate: (
		value: TValue,
		index: number,
		array: ReadonlyArray<TValue>,
	) => unknown,
): boolean;
