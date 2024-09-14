import deepEquals from "./deepEquals";
import deepMerge from "./deepMerge";
import equals from "./equals";
import every from "./every";
import filter from "./filter";
import flatten from "./flatten";
import flip from "./flip";
import fromArrays from "./fromArrays";
import fromEntries from "./fromEntries";
import has from "./has";
import includes from "./includes";
import isMap from "./isMap";
import map from "./map";
import merge from "./merge";
import removeKeys from "./removeKeys";
import removeValues from "./removeValues";
import some from "./some";
import type { AnyMap, InferMapKey, InferMapValue, UnknownMap } from "./types";
import withKeys from "./withKeys";

declare namespace PhantomMap {
	export type { InferMapKey, InferMapValue, UnknownMap, AnyMap };

	export {
		deepEquals,
		deepMerge,
		equals,
		every,
		filter,
		flatten,
		flip,
		fromArrays,
		fromEntries,
		has,
		includes,
		isMap,
		map,
		merge,
		removeKeys,
		removeValues,
		some,
		withKeys,
	};

	export function keys<TKey>(map: ReadonlyMap<TKey, unknown>): Array<TKey>;

	export function values<TValue>(map: ReadonlyMap<unknown, TValue>): Array<TValue>;

	export function entries<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Array<[TKey, TValue]>;
}

export = PhantomMap;
