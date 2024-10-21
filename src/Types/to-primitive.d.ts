// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/to-primitive.d.ts

/**
 * Turns accepted literal type argument to its primitive
 * @example
 * ```ts
 * // number
 * type Case1 = ToPrimitive<1>
 * // string
 * type Case2 = ToPrimitive<'1'>
 * // {a: number; b: string}
 * type Case3 = ToPrimitive<{a: 1;  b: 's'}>
 * ```
 */
export type ToPrimitive<T> = T extends string
	? string
	: T extends number
		? number
		: T extends null
			? null
			: T extends undefined
				? undefined
				: T extends boolean
					? boolean
					: T extends bigint
						? bigint
						: T extends symbol
							? symbol
							: {
									[K in keyof T]: ToPrimitive<T[K]>;
								};
