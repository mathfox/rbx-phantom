export type DeepReadonly<T> = T extends ReadonlyArray<infer R>
	? DeepReadonlyArray<R>
	: T extends Callback
		? T
		: T extends ReadonlyMap<infer Key, infer Value>
			? ReadonlyMap<Key, DeepReadonly<Value>>
			: T extends object
				? DeepReadonlyObject<T>
				: T;

//export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyArray<T> = _<ReadonlyArray<DeepReadonly<T>>>;

export type DeepReadonlyObject<T> = _<{
	readonly [P in keyof T]: DeepReadonly<T[P]>;
}>;

export type DeepReadonlyMap<T> = T extends ReadonlyMap<infer Key, infer Value>
	? ReadonlyMap<Key, DeepReadonly<Value>>
	: never;
