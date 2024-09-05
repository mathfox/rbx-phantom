import type { DeepReadonly, DeepReadonlyArray } from "./DeepReadonly";

export function deepFreeze<TValue>(array: ReadonlyArray<TValue>): DeepReadonlyArray<TValue>;

export function deepFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, DeepReadonly<TValue>>;

export function deepFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<DeepReadonly<TValue>>;

export function deepFreeze<TObject extends object>(object: TObject): DeepReadonly<TObject>;
