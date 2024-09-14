/**
 * Returned index is 0-based.
 */
declare function findLast<TValue>(array: ReadonlyArray<TValue>, value: TValue, from?: number): number | undefined;

export = findLast;
