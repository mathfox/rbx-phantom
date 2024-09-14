/**
 * @param index 0-based index
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 */
declare function at<TValue>(array: ReadonlyArray<TValue>, index: number): TValue | undefined;

export = at;
