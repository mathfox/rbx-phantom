declare function keys(array: ReadonlyArray<unknown>): Array<number>;

declare function keys<TKey>(map: ReadonlyMap<TKey, unknown>): Array<TKey>;

declare function keys<TValue>(set: ReadonlySet<TValue>): Array<TValue>;

declare function keys<TObject extends object>(object: TObject): Array<keyof TObject>;

export = keys;
