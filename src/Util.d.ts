export type PhantomNone = { readonly __none__: unique symbol };

export type ExcludeNone<T> = Exclude<T, PhantomNone>;

export type ObjectKey = string | number | symbol;

export type AnySet = Set<unknown>;

export type FromEntries<K extends ObjectKey, T extends Array<[K, unknown]>> = {
	[P in T[number][0]]: Extract<T[number], [P, unknown]>[1];
};

export type ReadonlyDeep<T> = T extends (infer U)[]
	? ReadonlyDeepArray<U>
	: T extends Callback
		? T
		: T extends object
			? ReadonlyDeepObject<T>
			: T;

export type ObjectFromKeyValueArrays<
	Keys extends Array<ObjectKey>,
	Values extends Array<unknown>,
> = ObjectFromKeyValuePairs<KeyValuePairsFromLists<Keys, Values>>;

export type ReplaceType<T, F, R> = F extends T ? Exclude<T, F> | R : T;

export type TryIndex<T extends object, K> = K extends keyof T
	? T[K]
	: undefined;

interface ReadonlyDeepArray<T> extends ReadonlyArray<ReadonlyDeep<T>> {}

type ReadonlyDeepObject<T> = {
	readonly [P in keyof T]: ReadonlyDeep<T[P]>;
};

type KeyValuePairsFromLists<
	Keys extends Array<ObjectKey>,
	Values extends Array<unknown>,
> = {
	[index in keyof Keys]: index extends keyof Values
		? [Keys[index], Values[index]]
		: never;
};

type ObjectFromKeyValuePairs<
	KV extends Array<[ObjectKey, unknown]>,
	T = {
		[index in keyof KV]: KV[index] extends [ObjectKey, unknown]
			? Record<KV[index][0], KV[index][1]>
			: never;
	},
> = UnionToIntersection<T[keyof T]>;
