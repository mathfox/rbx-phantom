// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/tuple-to-object.d.ts

import type { PropertyKey } from "./property-key";

/**
 * Accepts a tuple of string, number or symbol and return the object type, where the key values are the elements of the tuple
 * @example
 * ```ts
 * // {
 * //   foo: 'foo',
 * //   bar: 'bar',
 * // }
 * type Result = TupleToObject<['foo', 'bar']>
 * ```
 */
export type TupleToObject<T extends readonly PropertyKey[]> = {
	[K in T[number]]: K;
};
