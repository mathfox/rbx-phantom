type PrimitiveType = CheckablePrimitives[keyof Omit<CheckablePrimitives, "userdata" | "function" | "table">];

type FlattenMergeKey<TInput> = TInput extends [infer TFirst, ...infer TRest]
	                         ? TFirst extends ReadonlyMap<infer TKey, unknown>   ? TKey   | FlattenMergeKey<[...TRest]>
                             : TFirst extends ReadonlySet<infer TKey>            ? TKey   | FlattenMergeKey<[...TRest]>
			                 : TFirst extends ReadonlyArray<unknown>             ? number | FlattenMergeKey<[...TRest]>
				             : TFirst extends PrimitiveType                      ? never
					         : TFirst extends object                             ? {
                                                                                       readonly [TKey in keyof TFirst]: TKey
                                                                                   }[keyof TFirst] | FlattenMergeKey<[...TRest]>
						     : never
	                         : never

type FlattenMergeValue<TInput> = TInput extends [infer TFirst, ...infer TRest]
	? TFirst extends ReadonlyMap<any, infer TValue>
		? TValue | FlattenMergeValue<[...TRest]>
		: TFirst extends ReadonlySet<any>
			? true | FlattenMergeValue<[...TRest]>
			: TFirst extends ReadonlyArray<infer TValue>
				? TValue | FlattenMergeValue<[...TRest]>
				: TFirst extends PrimitiveType
					? never
					: TFirst extends object
						? TFirst[keyof TFirst] | FlattenMergeValue<[...TRest]>
						: never
	: never;

/**
 * If the value is `None`, it will be removed from the result.
 */
declare function merge<
	TMaps extends ReadonlyArray<ReadonlySet<unknown> | ReadonlyMap<unknown, unknown> | object | undefined>,
>(...maps: TMaps): Map<FlattenMergeKey<typeof maps>, FlattenMergeValue<typeof maps>>;

export = merge;
