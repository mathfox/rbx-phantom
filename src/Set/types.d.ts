export type InferSetValue<TInput> = TInput extends ReadonlySet<infer TValue> ? TValue : never;

export type UnknownSet = Set<unknown>;

export type AnySet = Set<any>;
