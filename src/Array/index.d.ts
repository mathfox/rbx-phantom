declare namespace PhantomArray {
	export {};

	export type {};

	export function deepClone<T>(array: ReadonlyArray<T>): Array<T>;

	export function safeFreeze<T>(array: ReadonlyArray<T>): ReadonlyArray<T>;

	export function values<T>(array: ReadonlyArray<T>): Array<T>;

	export function deepCompareArray(left: ReadonlyArray<unknown>, right: ReadonlyArray<unknown>): boolean;
}

export = PhantomArray;
