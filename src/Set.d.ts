interface PhantomSetConstructor {
	add<const T, const E>(
		this: void,
		set: ReadonlySet<T>,
		...items: ReadonlyArray<E>
	): Set<T | E>;

	delete<const T, const E extends T>(
		this: void,
		set: ReadonlySet<T>,
		...values: ReadonlyArray<E>
	): Set<E extends never ? T : Exclude<T, E>>;
	/**
	 * @alias {@link delete}
	 */
	deleteFromSet: PhantomSetConstructor["delete"];

	/**
	 * Returns a set of values that are in the first set, but not in the other sets.
	 */
	difference<const T, const E>(
		this: void,
		set: ReadonlySet<T>,
		...otherSets: ReadonlyArray<ReadonlySet<E>>
	): Set<Exclude<T, E>>;

	/**
	 * Returns a set of values that are in the first set, but not in the other sets, and vice versa.
	 * Simply speaking, this returns a unique entries in the sets provided.
	 */
	differenceSymmetric(
		this: void,
		...sets: ReadonlyArray<ReadonlySet<defined>>
	): Set<unknown>;

	/**
	 * Filters a set using a predicate. Any items that do not pass the predicate will be removed from the set.
	 */
	filter<const T, const S extends T>(
		this: void,
		set: ReadonlySet<T>,
		predicate: (item: T, set: ReadonlySet<T>) => item is S,
	): Set<S>;

	fromArray<const T>(this: void, array: ReadonlyArray<T>): Set<T>;

	has<T>(this: void, set: ReadonlySet<T>, value: T): boolean;

	intersection<const T>(
		this: void,
		...sets: ReadonlyArray<ReadonlySet<T>>
	): Set<T>;
	isSubset(
		this: void,
		subset: ReadonlySet<defined>,
		superset: ReadonlySet<defined>,
	): boolean;
	isSuperset(
		this: void,
		superset: ReadonlySet<defined>,
		subset: ReadonlySet<defined>,
	): boolean;

	map<const T, const R>(
		this: void,
		set: ReadonlySet<T>,
		mapper: (item: T, set: Set<T>) => R,
	): Set<R>;

	keys<T>(this: void, set: ReadonlySet<T>): Array<T>;
	toArray: PhantomSetConstructor["keys"];
	values<T>(this: void, set: ReadonlySet<T>): Array<true>;

	/**
	 * Exists for typechecking purposes.
	 *
	 * Under the hood it is just a reference to {@link table.freeze} function.
	 *
	 * Returns the set itself.
	 */
	freeze<T>(this: void, set: Set<T>): ReadonlySet<T>;

	entries<T>(this: void, set: ReadonlySet<T>): Array<[T, true]>;

	map<T, R>(
		this: void,
		set: ReadonlySet<T>,
		mapper: (item: T, self: typeof set) => R,
	): Set<R>;
}

declare const PhantomSet: PhantomSetConstructor;

export = PhantomSet;

import type { AnySet } from "./Util";

declare namespace PhantomSetOld {
	export function difference<T>(set: Set<T>, ...sets: Set<T>[]): Set<T>;

	export function differenceSymmetric<T>(
		set: Set<T>,
		...sets: Set<T>[]
	): Set<T>;

	export function filter<T, S extends Set<T>>(
		set: S,
		predicate: (item: T, set: Readonly<S>) => unknown,
	): Set<T>;

	export function intersection<T>(...sets: Set<T>[]): Set<T>;

	export function isSubset<A extends AnySet, B extends AnySet>(
		subset: A,
		superset: B,
	): boolean;

	export function isSuperset<A extends AnySet, B extends AnySet>(
		superset: A,
		subset: B,
	): boolean;

	export function merge<T>(...sets: Set<T>[]): Set<T>;

	export function subtract<S extends AnySet>(set: S, ...values: unknown[]): S;
}
