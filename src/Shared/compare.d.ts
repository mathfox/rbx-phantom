/**
 * Checks for the shallow equality of the two given values.
 * The rules of equality are:
 * - If the values are not a tables - it uses strict equality check
 * - If the values are array it checks for their equality using `compareArray` function.
 * - Otherwise it checks for equality using `compareTable` function.
 */
export function compare(left: unknown, right: unknown): boolean;

/**
 * This function assumes that both values are checked with `isArray` function.
 * Each value is checked for shallow equality.
 */
export function compareArray(left: ReadonlyArray<unknown>, right: ReadonlyArray<unknown>): boolean;

/**
 * Compares for shallow equality of the values in both tables.
 */
export function compareTable(left: object, right: object): boolean;
