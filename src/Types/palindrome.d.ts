// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/palindrome.d.ts

import { IsStringLiteral } from "./is-string-literal";
import { Not } from "./not";
import { IsEmptyString } from "./string";
import { Stringify } from "./stringify";

type _IsPalindrome<T extends string> = IsEmptyString<T> extends true
	? true
	: Not<IsStringLiteral<T>> extends true
		? false
		: T extends `${infer First extends string}${infer Rest extends string}`
			? IsEmptyString<Rest> extends true
				? true
				: Rest extends `${infer NewRest extends string}${First}`
					? _IsPalindrome<NewRest>
					: false
			: false;

/**
 * Check whether a string or number is a palindrome.
 * @example
 * ```ts
 * // true
 * type T0 = IsPalindrome<"racecar">;
 * // false
 * type T1 = IsPalindrome<"hello">;
 * ```
 */
export type IsPalindrome<T extends string | number> = _IsPalindrome<Stringify<T>>;
