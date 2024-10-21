// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/remove-index-signature.d.ts

/**
 * Removes the index signature from the passed type
 * @example
 * ```ts
 * // {}
 * type Case1 = RemoveIndexSignature<{[x: string]: number}>
 * // {x: number}
 * type Case2 = RemoveIndexSignature<{x: number}>
 * ```
 */
export type RemoveIndexSignature<T> = {
	[Key in keyof T as Key extends `${infer _}` ? Key : never]: T[Key];
};
