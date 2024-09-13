/**
 * Filters a set using a predicate.
 * Any items that do not pass the predicate will be removed from the set.
 *
 * @param predicate A function that should return either a falsy or truthy value.
 */
declare function filter<TValue>(
	set: ReadonlySet<TValue>,
	predicate: (value: TValue, setRef: typeof set) => unknown,
): Set<TValue>;

export = filter;
