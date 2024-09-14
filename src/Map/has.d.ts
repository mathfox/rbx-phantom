declare function has<TKey>(map: ReadonlyMap<TKey, unknown>, ...keys: ReadonlyArray<TKey | undefined>): boolean;

export = has;
