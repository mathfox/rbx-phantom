export function values<TValue>(array: ReadonlyArray<TValue>): Array<TValue>;

export function values<TValue>(map: ReadonlyMap<unknown, TValue>): Array<TValue>;

export function values(set: ReadonlySet<unknown>): Array<true>;

export function values<TObject extends object>(object: TObject): Array<TObject[keyof TObject]>;
