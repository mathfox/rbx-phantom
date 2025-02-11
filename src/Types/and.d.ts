// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/and.d.ts

import { Extends, IfExtends } from "./extends";

/**
 * Returns result of logical multiplication of two params.
 * @example
 * ```ts
 * // true
 * type Case1 = And<true, true>
 * // false
 * type Case2 = And<false, true>
 * ```
 */
export type And<Condition1, Condition2> = IfExtends<Condition1, true, Extends<Condition2, true>>;

/**
 * Returns result of logical multiplication of all elements inside the passed array type
 * @example
 * ```ts
 * // true
 * type Case1 = And<[true, true, true]>
 * // false
 * type Case2 = And<[true, true, false]>
 * ```
 */
export type AndArr<Conditions extends readonly unknown[]> = Extends<Conditions[number], true>;
