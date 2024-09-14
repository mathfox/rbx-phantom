declare function deepClone<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

declare function deepClone<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Map<TKey, TValue>;

declare function deepClone<TValue>(set: ReadonlySet<TValue>): Set<TValue>;

declare function deepClone<TObject extends object>(object: TObject): TObject;

export = deepClone;
