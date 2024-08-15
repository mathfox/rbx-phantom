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

interface PhantomSharedConstructor {
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
