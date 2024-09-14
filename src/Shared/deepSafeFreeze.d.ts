import type { DeepReadonlyArray, DeepReadonly } from "../Util/DeepReadonly";

declare function deepSafeFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

declare function deepSafeFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, DeepReadonly<TValue>>;

declare function deepSafeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

declare function deepSafeFreeze<T extends object>(object: T): DeepReadonly<T>;

export = deepSafeFreeze;
