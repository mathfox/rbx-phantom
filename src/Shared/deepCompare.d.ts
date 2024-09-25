/**
 * Compares the two values.
 */
export function deepCompare(left: unknown, right: unknown): boolean;

export function deepCompareArray(left: ReadonlyArray<unknown>, right: ReadonlyArray<unknown>): boolean;

export function deepCompareTable(left: ReadonlyMap<unknown, unknown>, right: ReadonlyMap<unknown, unknown>): boolean;
