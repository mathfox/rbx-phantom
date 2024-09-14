declare function map<TValue, TOutput>(
	set: ReadonlySet<TValue>,
	mapper: (value: TValue, setRef: typeof set) => TOutput | undefined,
): Set<TOutput>;

export = map;
