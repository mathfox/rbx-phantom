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
import merge from "./merge";
import symmetricDifference from "./symmetricDifference";
import type { AnySet, InferSetValue, UnknownSet } from "./types";

declare namespace PhantomSet {
	export {
		add,
		delete_ as delete,
		difference,
		filter,
		fromArray,
		has,
		intersection,
		isSubset,
		isSuperset,
		map,
		merge,
		symmetricDifference,
	};

	export type { InferSetValue, UnknownSet, AnySet };

	function keys<TValue>(set: ReadonlySet<TValue>): Array<TValue>;

	export { keys, keys as toArray };

	export function values<TValue>(set: ReadonlySet<TValue>): Array<true>;

	export function entries<TValue>(set: ReadonlySet<TValue>): Array<[TValue, true]>;

	/**
	 * Safely freezes the set by using {@link table.isfrozen}.
	 */
	export function safeFreeze<TValue>(set: Set<TValue>): ReadonlySet<TValue>;
}

export = PhantomSet;
