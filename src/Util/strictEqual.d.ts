declare function strictEqual(): true;

declare function strictEqual(value: unknown): true;

/**
 * Checks whether all of the provided values are equal by using the `===` strict equality check.
 *
 * If none or a single value provided, always returns `true`.
 */
declare function strictEqual(...values: ReadonlyArray<unknown>): boolean;

export = strictEqual;

