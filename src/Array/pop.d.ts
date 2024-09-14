/**
 * Removes an element from the end of the array, and returns the array with the popped elements removed.
 */
declare function pop<TValue>(array: ReadonlyArray<TValue>, count?: number): Array<TValue>;

export = pop;
