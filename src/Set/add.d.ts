/**
 * This function filters out the `undefined` before adding a value.
 */
declare function add<TValue>(set: Set<TValue>, ...values: ReadonlyArray<TValue | undefined>): Set<TValue>;

export = add;
