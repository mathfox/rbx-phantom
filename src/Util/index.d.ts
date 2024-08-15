export function strictEqual(...values: ReadonlyArray<unknown>): boolean;

export type Incr = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
	32,
	33,
	34,
	35,
	36,
	37,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	46,
	47,
	48,
	49,
	50,
	51,
	52,
	53,
	54,
	55,
	56,
	57,
	58,
	59,
	60,
	61,
	62,
	63,
	64,
];

export type Decr = [
	never,
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
	32,
	33,
	34,
	35,
	36,
	37,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	46,
	47,
	48,
	49,
	50,
	51,
	52,
	53,
	54,
	55,
	56,
	57,
	58,
	59,
	60,
	61,
	62,
	63,
];

/**
 * Helper type for repetitive types in tuples.
 *
 * @example
 * ```typescript
 * type LongTupleType = [number, number, number, number]
 * // is the same as
 * type ShortTupleType = Tuple<4, number>
 * ```
 */
export type Tuple<
	Length extends number,
	Type,
	Acc extends Array<Type> = [],
	CurrentLength extends number = 0,
> = Length extends CurrentLength
	? Acc
	: Tuple<Length, Type, [...Acc, Type], Incr[CurrentLength]>;

export type InferArrayValue<T> = T extends ReadonlyArray<infer Value>
	? Value
	: never;

export type InferMapKey<T> = T extends ReadonlyMap<infer Key, unknown>
	? Key
	: never;
export type InferMapValue<T> = T extends ReadonlyMap<unknown, infer Value>
	? Value
	: never;

export type InferSetValue<T> = T extends ReadonlySet<infer V> ? V : never;

export type InferObjectKey<T> = T extends ReadonlyArray<unknown>
	? number
	: T extends ReadonlyMap<infer Key, unknown>
		? Key
		: T extends ReadonlySet<infer Key>
			? Key
			: T extends object
				? keyof T
				: never;

export type InferObjectValue<T> = T extends ReadonlyArray<infer Value>
	? Value
	: T extends ReadonlyMap<unknown, infer Value>
		? Value
		: T extends ReadonlySet<unknown>
			? true
			: T extends object
				? T[keyof T]
				: never;

export type DeepReadonly<T> = T extends ReadonlyArray<infer R>
	? DeepReadonlyArray<R>
	: T extends Callback
		? T
		: T extends object
			? DeepReadonlyObject<T>
			: T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
};
