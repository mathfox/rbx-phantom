/**
 * This function preserves order, so sparse arrays such as { nil, nil, 3 } will become { nil, nil, 3, 4} when concatenated with 4.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
export default function concat<T>(
	array: ReadonlyArray<T>,
	...values: ReadonlyArray<ReadonlyArray<T> | T | undefined>
): Array<T>;