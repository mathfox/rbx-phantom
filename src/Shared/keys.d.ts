export default function keys(array: ReadonlyArray<unknown>): Array<number>;

export default function keys<TKey>(map: ReadonlyMap<TKey, unknown>): Array<TKey>;

export default function keys<TValue>(set: ReadonlySet<TValue>): Array<TValue>;

export default function keys<TObject extends object>(object: TObject): Array<keyof TObject>;
