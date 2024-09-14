declare function safeFreeze<TValue>(array: ReadonlyArray<TValue>): ReadonlyArray<TValue>;

declare function safeFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, TValue>;

declare function safeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<TValue>;

declare function safeFreeze<TObject extends object>(object: TObject): Readonly<TObject>;

export = safeFreeze;
