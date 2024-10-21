// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/ceil.d.ts

import { GetFloatNumberParts } from "./get-float-number-parts";
import { Increment } from "./increment";
import { IsFloat, IsNegative, Negate } from "./number";

/**
 * Type version of `Math.ceil()`. Returns ceiled value of the passed number
 * @example
 * ```ts
 * // 2
 * type Case1 = Ceil<1.2>
 * // -1
 * type Case2 = Ceil<-1.2>
 * ```
 */
export type Ceil<T extends number> = IsFloat<T> extends true
	? GetFloatNumberParts<T> extends [infer Whole extends number, unknown]
		? IsNegative<T> extends true
			? Negate<Whole>
			: Increment<Whole>
		: never
	: T;
