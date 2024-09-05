export function entries<TValue>(array: ReadonlyArray<TValue>): Array<[number, TValue]>;

export function entries<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Array<[TKey, TValue]>;

export function entries<TValue>(set: ReadonlySet<TValue>): Array<[TValue, true]>;

export function entries<TObject extends object>(object: TObject): Array<[keyof TObject, TObject[keyof TObject]]>;
