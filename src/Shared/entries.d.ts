declare function entries<TValue>(array: ReadonlyArray<TValue>): Array<[number, TValue]>;

declare function entries<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Array<[TKey, TValue]>;

declare function entries<TValue>(set: ReadonlySet<TValue>): Array<[TValue, true]>;

declare function entries<TObject extends object>(object: TObject): Array<[keyof TObject, TObject[keyof TObject]]>;

export = entries;
