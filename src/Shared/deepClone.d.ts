export function deepClone<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

export function deepClone<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Map<TKey, TValue>;

export function deepClone<TValue>(set: ReadonlySet<TValue>): Set<TValue>;

export function deepClone<TObject extends object>(object: TObject): TObject;
