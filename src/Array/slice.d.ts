/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
declare function slice<TValue>(array: ReadonlyArray<TValue>, from?: number, to?: number): Array<TValue>;

export = slice;
