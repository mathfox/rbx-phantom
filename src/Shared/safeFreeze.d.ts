export default function safeFreeze<TValue>(array: ReadonlyArray<TValue>): ReadonlyArray<TValue>;

export default function safeFreeze<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): ReadonlyMap<TKey, TValue>;

export default function safeFreeze<TValue>(set: ReadonlySet<TValue>): ReadonlySet<TValue>;

export default function safeFreeze<TObject extends object>(object: TObject): Readonly<TObject>;
