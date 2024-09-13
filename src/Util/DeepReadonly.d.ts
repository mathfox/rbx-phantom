export type DeepReadonly<TInput> = TInput extends ReadonlyArray<infer TValue>
	? DeepReadonlyArray<TValue>
	: TInput extends Callback
		? TInput
		: TInput extends ReadonlyMap<infer TKey, infer TValue>
			? ReadonlyMap<TKey, DeepReadonly<TValue>>
			: TInput extends object
				? DeepReadonlyObject<TInput>
				: TInput;

//export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyArray<TInput> = _<ReadonlyArray<DeepReadonly<TInput>>>;

export type DeepReadonlyObject<TInput> = _<{
	readonly [TKey in keyof TInput]: DeepReadonly<TInput[TKey]>;
}>;

export type DeepReadonlyMap<TInput> = TInput extends ReadonlyMap<infer TKey, infer TValue>
	? ReadonlyMap<TKey, DeepReadonly<TValue>>
	: never;
