import type { DeepReadonlyArray, DeepReadonly } from "./DeepReadonly";

export function deepSafeFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

export function deepSafeFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, DeepReadonly<TValue>>;

export function deepSafeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

export function deepSafeFreeze<T extends object>(object: T): DeepReadonly<T>;
