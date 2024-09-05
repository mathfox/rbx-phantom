import type { compare, compareArray, compareTable } from "./compare";
import type { deepClone } from "./deepClone";
import type { deepCompare, deepCompareArray, deepCompareTable } from "./deepCompare";
import type { deepEquals } from "./deepEquals";
import type { deepFreeze } from "./deepFreeze";
import type { deepSafeFreeze } from "./deepSafeFreeze";
import type { entries } from "./entries";
import type { keys } from "./keys";
import type { safeFreeze } from "./safeFreeze";
import type { size } from "./size";
import type { values } from "./values";

export * from "./DeepReadonly";

export type InferObjectKey<T> = T extends ReadonlyArray<unknown>
	? number
	: T extends ReadonlyMap<infer Key, unknown>
		? Key
		: T extends ReadonlySet<infer Key>
			? Key
			: T extends object
				? keyof T
				: never;

export type InferObjectValue<T> = T extends ReadonlyArray<infer Value>
	? Value
	: T extends ReadonlyMap<unknown, infer Value>
		? Value
		: T extends ReadonlySet<unknown>
			? true
			: T extends object
				? T[keyof T]
				: never;

interface PhantomSharedConstructor {
	compare: typeof compare;
	compareArray: typeof compareArray;
	compareTable: typeof compareTable;

	deepClone: typeof deepClone;

	deepCompare: typeof deepCompare;
	deepCompareArray: typeof deepCompareArray;
	deepCompareTable: typeof deepCompareTable;

	deepEquals: typeof deepEquals;

	deepFreeze: typeof deepFreeze;

	deepSafeFreeze: typeof deepSafeFreeze;

	entries: typeof entries;

	keys: typeof keys;

	safeFreeze: typeof safeFreeze;

	size: typeof size;

	values: typeof values;
}

export declare const PhantomShared: PhantomSharedConstructor;
