export type InferArrayValue<TInput> = TInput extends ReadonlyArray<infer TValue> ? TValue : never;

export type UnknownArray = Array<unknown>;

export type AnyArray = Array<any>;
