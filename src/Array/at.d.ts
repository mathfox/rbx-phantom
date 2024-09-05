/**
 * @param index 0-based index
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 */
export default function at<TValue>(
	array: ReadonlyArray<TValue>,
	index: number,
): TValue | undefined;
