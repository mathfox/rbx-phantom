export default function values<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

export default function values<TValue>(map: ReadonlyMap<unknown, TValue>): Array<TValue>;

export default function values(set: ReadonlySet<unknown>): Array<true>;

export default function values<TObject extends object>(object: TObject): Array<TObject[keyof TObject]>;
