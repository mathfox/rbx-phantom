/**
 * Will return `true` for empty arrays.
 *
 * Proxy array tables that expose `__len` metamethod which returns 0 will also return `true` in that case.
 */
declare function isMap(value: unknown): value is ReadonlyMap<unknown, unknown>;

export = isMap;
