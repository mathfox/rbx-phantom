// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/loose-literal.d.ts

/**
 * Improves the autocompletion of loose literal types
 * @example
 * ```ts
 * // "a" | "b" | "c" | or any string
 * type T0 = LooseLiteral<"a" | "b" | "c", string>;
 * ```
 */
export type LooseLiteral<Literal, BaseType> = Literal | (BaseType & Record<never, never>);
