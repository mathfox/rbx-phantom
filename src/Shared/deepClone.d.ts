export default function deepClone<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

export default function deepClone<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Map<TKey, TValue>;

export default function deepClone<TValue>(set: ReadonlySet<TValue>): Set<TValue>;

export default function deepClone<TObject extends object>(object: TObject): TObject;
