declare function map<TValue, TOutput>(
	set: ReadonlySet<TValue>,
	mapper: (value: TValue, setRef: typeof set) => TOutput,
): Set<TOutput>;

export = map;
