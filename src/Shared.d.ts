interface PhantomSharedConstructor {
	freeze<const T>(this: void, array: Array<T>): ReadonlyArray<T>;
	freeze<const K, const V>(this: void, map: Map<K, V>): ReadonlyMap<K, V>;
	freeze<const T>(this: void, set: Set<T>): ReadonlySet<T>;
	freeze<const T extends object>(this: void, object: T): Readonly<T>;

	values<const T>(this: void, array: ReadonlyArray<T>): Array<T>;
	values<const V>(this: void, map: ReadonlyMap<defined, V>): Array<V>;
	values(this: void, set: ReadonlySet<defined>): Array<true>;
	values<const T extends object, const K extends keyof T>(
		object: T,
	): Array<T[K]>;

	keys(this: void, array: ReadonlyArray<defined>): Array<number>;
	keys<const K>(this: void, map: ReadonlyMap<K, defined>): Array<K>;
	keys<const T>(this: void, set: ReadonlySet<T>): Array<T>;
	keys<const T extends object, const K extends keyof T>(object: T): Array<K>;

	size(object: object): number;
}

declare const PhantomShared: PhantomSharedConstructor;

export = PhantomShared;
