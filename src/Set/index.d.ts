interface PhantomSetConstructor {
	/**
	 * This function filters out the `undefined` before adding a value.
	 */
	add<T>(set: Set<T>, ...values: ReadonlyArray<T | undefined>): Set<T>;

	/**
	 * This function filters out the `undefined` before deleting a value.
	 */
	delete<T>(
		this: void,
		set: ReadonlySet<T>,
		...values: ReadonlyArray<T | undefined>
	): Set<T>;

	/**
	 * Returns a set of values that are in the first set, but not in the other sets.
	 */
	difference<T>(
		this: void,
		set: ReadonlySet<T>,
		...otherSets: ReadonlyArray<ReadonlySet<T> | undefined>
	): Set<T>;

	/**
	 * Filters a set using a predicate.
	 * Any items that do not pass the predicate will be removed from the set.
	 * @param predicate A function that should return either a falsy or truthy value.
	 */
	filter<T>(
		this: void,
		set: ReadonlySet<T>,
		predicate: (value: T, set: ReadonlySet<T>) => unknown,
	): Set<T>;

	/**
	 * This function filters out the `undefined`.
	 */
	fromArray<T>(this: void, array: ReadonlyArray<T | undefined>): Set<T>;

	has<T>(
		this: void,
		set: ReadonlySet<T>,
		...values: ReadonlyArray<T | undefined>
	): boolean;

	intersection<T>(
		this: void,
		...sets: ReadonlyArray<ReadonlySet<T> | undefined>
	): Set<T>;

	isSubset(
		this: void,
		subset: ReadonlySet<unknown>,
		superset: ReadonlySet<unknown>,
	): boolean;

	isSuperset(
		this: void,
		superset: ReadonlySet<unknown>,
		subset: ReadonlySet<unknown>,
	): boolean;

	map<T, R>(
		this: void,
		set: ReadonlySet<T>,
		mapper: (value: T, source: ReadonlySet<T>) => R,
	): Set<R>;

	keys<T>(this: void, set: ReadonlySet<T>): Array<T>;
	toArray: PhantomSetConstructor["keys"];

	values<T>(this: void, set: ReadonlySet<T>): Array<true>;

	/**
	 * Safely freezes the set by using {@link table.isfrozen}.
	 */
	safeFreeze<T>(this: void, set: Set<T>): ReadonlySet<T>;

	entries<T>(this: void, set: ReadonlySet<T>): Array<[T, true]>;

	map<T, R>(
		this: void,
		set: ReadonlySet<T>,
		mapper: (item: T, self: typeof set) => R,
	): Set<R>;

	merge<T>(
		this: void,
		...sets: ReadonlyArray<ReadonlySet<T> | undefined>
	): Set<T>;

	/**
	 * Returns a set of values that are in the first set, but not in the other sets, and vice versa.
	 * Simply speaking, this returns a unique entries in the sets provided.
	 */
	symmetricDifference<T>(
		this: void,
		...sets: ReadonlyArray<ReadonlySet<T> | undefined>
	): Set<T>;
}

declare const PhantomSet: PhantomSetConstructor;

export = PhantomSet;
