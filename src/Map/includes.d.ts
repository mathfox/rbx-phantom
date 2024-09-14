declare function includes<TValue>(
	map: ReadonlyMap<unknown, TValue>,
	...values: ReadonlyArray<TValue | undefined>
): boolean;

export = includes;
