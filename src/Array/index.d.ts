import at from "./at";
import concat from "./concat";
import deepEquals from "./deepEquals";
import difference from "./difference";
import entries from "./entries";
import equals from "./equals";
import every from "./every";
import filter from "./filter";
import find from "./find";
import findLast from "./findLast";
import findWhere from "./findWhere";
import findWhereLast from "./findWhereLast";
import flatten from "./flatten";
import includes from "./includes";
import isArray from "./isArray";
import keys from "./keys";
import map from "./map";
import pop from "./pop";
import push from "./push";
import reduce from "./reduce";
import reduceRight from "./reduceRight";
import removeIndices from "./removeIndices";
import removeValues from "./removeValues";
import reverse from "./reverse";
import shift from "./shift";
import slice from "./slice";
import some from "./some";
import symmetricDifference from "./symmetricDifference";
import toSet from "./toSet";
import type { InferArrayValue, UnknownArray, AnyArray } from "./types";
import unshift from "./unshift";

declare namespace PhantomArray {
	export type { InferArrayValue, UnknownArray, AnyArray };

	export {
		at,
		concat,
		deepEquals,
		difference,
		entries,
		equals,
		every,
		filter,
		find,
		findLast,
		findWhere,
		findWhereLast,
		flatten,
		includes,
		isArray,
		keys,
		map,
		pop,
		push,
		reduce,
		reduceRight,
		removeIndices,
		removeValues,
		reverse,
		shift,
		slice,
		some,
		symmetricDifference,
		toSet,
		unshift,
	};

	export function deepClone<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

	export function safeFreeze<TValue>(array: ReadonlyArray<TValue>): ReadonlyArray<TValue>;

	export function values<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

	export function deepCompareArray(left: ReadonlyArray<unknown>, right: ReadonlyArray<unknown>): boolean;
}

export = PhantomArray;
