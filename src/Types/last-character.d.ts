// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/last-character.d.ts

import { If } from "./if";
import { IsEmptyString } from "./string";

export type LastCharacterOptions = {
	includeRest: boolean;
};

type _LastCharacter<
	T extends string,
	Options extends LastCharacterOptions = {
		includeRest: false;
	},
	Previous extends string = "",
> = string extends T
	? string
	: T extends `${infer First}${infer Rest}`
		? IsEmptyString<Rest> extends true
			? If<Options["includeRest"], [First, Previous], First>
			: _LastCharacter<Rest, Options, `${Previous}${First}`>
		: T;

/**
 * Accepts a string argument and returns its first character.
 * If the `includeRest` options is `true`, returns the first character and the rest of the string in the format of: [last, rest]
 * @example
 * ```ts
 * // 'c'
 * type Case1 = LastCharacter<'abc'>
 * // ['c', 'ab']
 * type Case2 = LastCharacter<'abc', {includeRest: true}>
 * ```
 */
export type LastCharacter<
	T extends string,
	Options extends LastCharacterOptions = {
		includeRest: false;
	},
> = _LastCharacter<T, Options>;
