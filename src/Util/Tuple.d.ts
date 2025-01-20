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
	TLength extends number,
	TType,
	TAcc extends Array<TType> = [],
	TCurrentLength extends number = 0,
> = TLength extends TCurrentLength ? TAcc : Tuple<TLength, TType, [...TAcc, TType], Incr[TCurrentLength]>;

