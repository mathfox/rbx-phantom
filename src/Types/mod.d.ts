// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/mod.d.ts

import { Div } from "./div";
import { Mult } from "./mult";
import { Sub } from "./sub";

/**
 * Returns the remainder of the division of two numbers.
 * @example
 * ```ts
 * // 1
 * type T0 = Mod<1, 2>;
 * // 1
 * type T1 = Mod<1, 3>;
 * ```
 */
export type Mod<Dividend extends number, Divisor extends number> = Div<Dividend, Divisor> extends infer Quotient extends
	number
	? Mult<Quotient, Divisor> extends infer Product extends number
		? Sub<Dividend, Product>
		: never
	: never;
