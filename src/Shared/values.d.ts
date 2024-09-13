declare function values<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

declare function values<TValue>(map: ReadonlyMap<unknown, TValue>): Array<TValue>;

declare function values(set: ReadonlySet<unknown>): Array<true>;

declare function values<TObject extends object>(object: TObject): Array<TObject[keyof TObject]>;

export = values;
