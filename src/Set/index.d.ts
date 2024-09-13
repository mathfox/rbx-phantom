import add from "./add";
import delete_ from "./delete";
import difference from "./difference";
import filter from "./filter";
import fromArray from "./fromArray";
import has from "./has";
import intersection from "./intersection";
import isSubset from "./isSubset";
import isSuperset from "./isSuperset";
import map from "./map";
import type { AnySet, InferSetValue, UnknownSet } from "./types";

declare namespace PhantomSet {
	export { add, delete_ as delete, difference, filter, fromArray, has, intersection, isSubset, isSuperset, map };

	export type { InferSetValue, UnknownSet, AnySet };
}

interface PhantomSetConstructor {
	merge<T>(this: void, ...sets: ReadonlyArray<ReadonlySet<T> | undefined>): Set<T>;

	/**
	 * Returns a set of values that are in the first set, but not in the other sets, and vice versa.
	 * Simply speaking, this returns a unique entries in the sets provided.
	 */
	symmetricDifference<T>(this: void, ...sets: ReadonlyArray<ReadonlySet<T> | undefined>): Set<T>;

	keys<T>(this: void, set: ReadonlySet<T>): Array<T>;

	values<T>(this: void, set: ReadonlySet<T>): Array<true>;

	entries<T>(this: void, set: ReadonlySet<T>): Array<[T, true]>;

	/**
	 * Safely freezes the set by using {@link table.isfrozen}.
	 */
	safeFreeze<T>(this: void, set: Set<T>): ReadonlySet<T>;

	toArray: PhantomSetConstructor["keys"];
}
