interface PhantomSetConstructor {
    keys<T>(this: void, set: ReadonlySet<T>): Array<T>;
    values<T>(this: void, set: ReadonlySet<T>): Array<true>;

    /**
     * Exists for typechecking purposes.
     *
     * Under the hood it is just a reference to {@link table.freeze} function.
     *
     * Returns the set itself.
     */
    freeze<T>(this: void, set: Set<T>): ReadonlySet<T>;

    add<T>(this: void, set: ReadonlySet<T>, ...values: Array<T>): void;
    delete<T>(this: void, set: ReadonlySet<T>, ...values: Array<T>): void;
    has<T>(this: void, set: ReadonlySet<T>, value: T): boolean;

    entries<T>(this: void, set: ReadonlySet<T>): Array<[T, true]>;

    map<T, R>(
        this: void,
		set: ReadonlySet<T>,
		mapper: (item: T, self: typeof set) => R,
	): Set<R>;

    fromArray<T>(this: void, array: Array<T>): Set<T>;
    toArray<T>(this: void, set: ReadonlySet<T>): Array<T>;
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
