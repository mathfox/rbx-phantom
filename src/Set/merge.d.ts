declare function merge<TValue>(...sets: ReadonlyArray<ReadonlySet<TValue> | undefined>): Set<TValue>;

export = merge;
