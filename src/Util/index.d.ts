export function strictEqual(...values: ReadonlyArray<unknown>): boolean;

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
