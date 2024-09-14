/**
 * This implementation differs from the shared one.
 * It pre-allocates the table size using `table.create`.
 *
 * The indexes are 0-based.
 */
declare function keys(array: ReadonlyArray<unknown>): Array<number>;

export = keys;
