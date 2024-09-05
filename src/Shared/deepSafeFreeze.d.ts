import type { DeepReadonlyArray, DeepReadonly } from "../Util";

export default function deepSafeFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

export default function deepSafeFreeze<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
): ReadonlyMap<TKey, DeepReadonly<TValue>>;

export default function deepSafeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

export default function deepSafeFreeze<T extends object>(object: T): DeepReadonly<T>;
