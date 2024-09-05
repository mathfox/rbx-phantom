import type { DeepReadonlyArray, DeepReadonly } from "../Util";

export default function deepFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

export default function deepFreeze<TKey, TValue>(
	map: ReadonlyMap<TKey, TValue>,
): ReadonlyMap<TKey, DeepReadonly<TValue>>;

export default function deepFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

export default function deepFreeze<TObject extends object>(object: TObject): DeepReadonly<TObject>;
