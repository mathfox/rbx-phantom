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

interface PhantomSharedConstructor {
	deepClone<T>(this: void, array: ReadonlyArray<T>): Array<T>;
	deepClone<K, V>(this: void, map: ReadonlyMap<K, V>): Map<K, V>;
	deepClone<T>(this: void, set: ReadonlySet<T>): Set<T>;
	deepClone<T extends object>(object: T): T;

	deepFreeze<T>(this: void, array: ReadonlyArray<T>): DeepReadonlyArray<T>;
	deepFreeze<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
	): ReadonlyMap<K, DeepReadonly<V>>;
	deepFreeze<T>(this: void, set: ReadonlySet<T>): ReadonlySet<DeepReadonly<T>>;
	deepFreeze<T extends object>(object: T): DeepReadonly<T>;

	deepSafeFreeze<T>(this: void, array: ReadonlyArray<T>): DeepReadonlyArray<T>;
	deepSafeFreeze<K, V>(
		this: void,
		map: ReadonlyMap<K, V>,
	): ReadonlyMap<K, DeepReadonly<V>>;
	deepSafeFreeze<T>(
		this: void,
		set: ReadonlySet<T>,
	): ReadonlySet<DeepReadonly<T>>;
	deepSafeFreeze<T extends object>(object: T): DeepReadonly<T>;

	keys(this: void, array: ReadonlyArray<unknown>): Array<number>;
	keys<K>(this: void, map: ReadonlyMap<K, unknown>): Array<K>;
	keys<T>(this: void, set: ReadonlySet<T>): Array<T>;
	keys<T extends object, K extends keyof T>(object: T): Array<K>;

	safeFreeze<T>(this: void, array: ReadonlyArray<T>): ReadonlyArray<T>;
	safeFreeze<K, const V>(this: void, map: ReadonlyMap<K, V>): ReadonlyMap<K, V>;
	safeFreeze<T>(this: void, set: ReadonlySet<T>): ReadonlySet<T>;
	safeFreeze<T extends object>(this: void, object: T): Readonly<T>;

	size(object: object): number;

	values<T>(this: void, array: ReadonlyArray<T>): Array<T>;
	values<V>(this: void, map: ReadonlyMap<unknown, V>): Array<V>;
	values(this: void, set: ReadonlySet<unknown>): Array<true>;
	values<T extends object, K extends keyof T>(object: T): Array<T[K]>;
}

export declare const PhantomShared: PhantomSharedConstructor;
