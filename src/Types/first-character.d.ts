// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/first-character.d.ts

import { If } from "./if";

export type FirstCharacterOptions = {
	includeRest: boolean;
};

/**
 * Accepts a string argument and returns its first character.
 * If the `includeRest` options is `true`, returns the first character and the rest of the string in the format of: [first, rest]
 * @example
 * ```ts
 * // 'a'
 * type Case1 = FirstCharacter<'abc'>
 * // ['a', 'bc']
 * type Case2 = FirstCharacter<'abc', {includeRest: true}>
 * ```
 */
export type FirstCharacter<
	T extends string,
	Options extends FirstCharacterOptions = { includeRest: false },
> = T extends `${infer First extends string}${infer Rest extends string}`
	? If<Options["includeRest"], [First, Rest], First>
	: never;
