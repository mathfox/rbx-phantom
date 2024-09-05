export function safeFreeze<TValue>(array: ReadonlyArray<TValue>): ReadonlyArray<TValue>;

export function safeFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, TValue>;

export function safeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<TValue>;

export function safeFreeze<TObject extends object>(object: TObject): Readonly<TObject>;
