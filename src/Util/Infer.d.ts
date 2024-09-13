export type InferKey<TInput> = TInput extends ReadonlyArray<unknown>
	? number
	: TInput extends ReadonlyMap<infer TKey, unknown>
		? TKey
		: TInput extends ReadonlySet<infer TKey>
			? TKey
			: TInput extends object
				? keyof TInput
				: never;

export type InferValue<TInput> = TInput extends ReadonlyArray<infer TValue>
	? TValue
	: TInput extends ReadonlyMap<unknown, infer TValue>
		? TValue
		: TInput extends ReadonlySet<unknown>
			? true
			: TInput extends object
				? TInput[keyof TInput]
				: never;
