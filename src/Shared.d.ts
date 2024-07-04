interface PhantomSharedConstructor {
    freeze<T>(this: void, array: Array<T>): ReadonlyArray<T>;
    freeze<K, V>(this: void, map: Map<K, V>): ReadonlyMap<K, V>;
    freeze<T>(this: void, set: Set<T>): ReadonlySet<T>;
    freeze<T extends object>(this: void, o: T): Readonly<T>
}

declare const PhantomShared: PhantomSharedConstructor

export = PhantomShared
