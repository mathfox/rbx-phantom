import type { Incr } from "./helpers";

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
> = Length extends CurrentLength ? Acc : Tuple<Length, Type, [...Acc, Type], Incr[CurrentLength]>;
