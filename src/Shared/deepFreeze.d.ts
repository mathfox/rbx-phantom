import type { DeepReadonly, DeepReadonlyArray } from "../Util/DeepReadonly";

declare function deepFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

declare function deepFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, DeepReadonly<TValue>>;

declare function deepFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

declare function deepFreeze<TObject extends object>(object: TObject): DeepReadonly<TObject>;

export = deepFreeze;
