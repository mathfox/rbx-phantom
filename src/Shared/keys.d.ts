export function keys(array: ReadonlyArray<unknown>): Array<number>;

export function keys<TKey>(map: ReadonlyMap<TKey, unknown>): Array<TKey>;

export function keys<TValue>(set: ReadonlySet<TValue>): Array<TValue>;

export function keys<TObject extends object>(object: TObject): Array<keyof TObject>;
