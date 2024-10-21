// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/array-element-type.d.ts

/**
 * Returns the type of the element of the passed array argument
 * @example
 * ```ts
 * // string
 * type Case1 = ArrayElementType<string[]>
 * // "a" | "b"
 * type Case1 = ArrayElementType<readonly ("a" | "b")[]>
 * ```
 */
export type ArrayElementType<T extends readonly unknown[]> = T extends Readonly<Array<infer Item>> ? Item : never;
