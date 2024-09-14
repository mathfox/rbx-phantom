/**
 * Attempts to find the 0-based index of the provided value.
 * If failed, returns `undefined`.
 */
declare function find<TValue>(array: ReadonlyArray<TValue>, value: TValue, from?: number): number | undefined;

export = find;
