export type InferMapKey<TInput> = TInput extends ReadonlyMap<infer TKey, unknown> ? TKey : never;

export type InferMapValue<TInput> = TInput extends ReadonlyMap<unknown, infer TValue> ? TValue : never;

export type UnknownMap = Map<unknown, unknown>;

export type AnyMap = Map<any, any>;
