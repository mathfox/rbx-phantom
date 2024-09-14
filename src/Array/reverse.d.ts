/**
 * Reverses the order of the items in an array in-place.
 *
 * Won't work for read-only arrays, therefore it should be either casted to writable one, or be cloned before using this function.
 */
declare function reverse<TValue>(array: Array<TValue>): Array<TValue>;

export = reverse;
