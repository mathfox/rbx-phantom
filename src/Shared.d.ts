interface PhantomSharedConstructor {
	freeze<T>(this: void, array: Array<T>): ReadonlyArray<T>;
	freeze<K, V>(this: void, map: Map<K, V>): ReadonlyMap<K, V>;
	freeze<T>(this: void, set: Set<T>): ReadonlySet<T>;
	freeze<T extends object>(this: void, object: T): Readonly<T>;

	values<T>(this: void, array: ReadonlyArray<T>): Array<T>;
	values<T>(this: void, map: ReadonlyMap<defined, T>): Array<T>;
	values(this: void, set: ReadonlySet<defined>): Array<true>;
	values<T extends object, K extends keyof T>(dictionary: T): K[];
}

declare const PhantomShared: PhantomSharedConstructor;

export = PhantomShared;
