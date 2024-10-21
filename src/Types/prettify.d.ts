// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/prettify.d.ts

import { If } from "./if";

type PrettifyOptions = {
	recursive: boolean;
};

/**
 * Accepts a type and returns its simplified version for better readability. Transforms interface to type, simplifies intersections. If `recursive` option is `true` transforms the children object properties as well
 * @example
 * ```ts
 * // { a: string; b: string }
 * type Case1 = Prettify<{ a: string } & { b: string }
 * ```
 */
export type Prettify<T, Options extends PrettifyOptions = { recursive: false }> = T extends infer R
	? {
			[K in keyof R]: If<Options["recursive"], Prettify<R[K], Options>, R[K]>;
		}
	: never;
