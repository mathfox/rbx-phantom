declare namespace PhantomMap {
	export type {};

	export {};

	export function keys<K>(map: ReadonlyMap<K, unknown>): Array<K>;

	export function values<V>(map: ReadonlyMap<unknown, V>): Array<V>;

	export function entries<K, V>(map: ReadonlyMap<K, V>): Array<[K, V]>;
}

export = PhantomMap;
