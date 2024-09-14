/**
 * This function filters out the `undefined` before deleting a value.
 */
declare function delete_<T>(set: ReadonlySet<T>, ...values: ReadonlyArray<T | undefined>): Set<T>;

export = delete_;
