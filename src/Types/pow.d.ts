// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/pow.d.ts

import { IsEqual } from "./equal";
import { Mult } from "./mult";
import { Push } from "./push";

type _Pow<
	Num extends number,
	Factor extends number,
	CurrentProduct extends number = 1,
	Iteration extends [] | [unknown, ...unknown[]] = [],
> = IsEqual<Iteration["length"], Factor> extends true
	? CurrentProduct
	: _Pow<Num, Factor, Mult<CurrentProduct, Num>, Push<Iteration, unknown>>;

/**
 * Returns the first integer parameter raised to factor of the second integer parameter
 *
 * @example
 * ```ts
 * // 100
 * type Result = Pow<10, 2>
 * ```
 */
export type Pow<Num extends number, Factor extends number> = _Pow<Num, Factor>;
