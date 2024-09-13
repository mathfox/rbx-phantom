/**
 * This function filters out the `undefined`.
 */
declare function fromArray<TValue>(array: ReadonlyArray<TValue | undefined>): Set<TValue>;

export = fromArray;
