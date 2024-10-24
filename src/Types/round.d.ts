// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/round.d.ts

import { FirstDigit } from "./first-digit";
import { GetFloatNumberParts } from "./get-float-number-parts";
import { IsGreaterThan } from "./greater-than";
import { Increment } from "./increment";
import { IsFloat } from "./number";

/**
 * Type version of `Math.round()`. Returns the value of a number rounded to the nearest integer
 * @example
 * ```ts
 * // 3
 * type T0 = Round<3.14>;
 * // -3
 * type T1 = Round<-3.14>;
 * ```
 */
type Round<T extends number> = IsFloat<T> extends true
	? GetFloatNumberParts<T> extends [infer Whole extends number, infer Fraction extends number]
		? IsGreaterThan<FirstDigit<Fraction>, 4> extends true
			? Increment<Whole>
			: Whole
		: never
	: T;
