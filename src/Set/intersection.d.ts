declare function intersection<TValue>(...sets: ReadonlyArray<ReadonlySet<TValue> | undefined>): Set<TValue>;

export = intersection;
