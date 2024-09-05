export default function entries<TValue>(array: ReadonlyArray<TValue>): Array<[number, TValue]>;

export default function entries<TKey, TValue>(map: ReadonlyMap<TKey, TValue>): Array<[TKey, TValue]>;

export default function entries<TValue>(set: ReadonlySet<TValue>): Array<[TValue, true]>;

export default function entries<TObject extends object>(
	object: TObject,
): Array<[keyof TObject, TObject[keyof TObject]]>;
