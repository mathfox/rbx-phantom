// export = PhantomArray;

import type { PhantomNone, ReadonlyDeep, ReplaceType } from "./Util";

interface PhantomArrayConstructor {
	keys<T>(this: void, array: ReadonlyArray<T>): Array<number>;
	values<T>(this: void, array: ReadonlyArray<T>): Array<T>;

	at<T>(this: void, array: Array<T>, index: number): T | undefined;

	freeze<T>(this: void, array: Array<T>): ReadonlyArray<T>;

	isArray(this: void, value: unknown): value is Array<unknown>;
}

declare const PhantomArray: PhantomArrayConstructor;

export = PhantomArray;

declare namespace PhantomArrayName {
	export function concat<T>(...arrays: T[]): T;

	export function concatDeep<T>(...arrays: T[]): T;

	export function copyDeep<T>(array: T): T;

	export function difference<T>(array: T[], ...values: T[]): T[];

	export function differenceSymmetric<T>(array: T[], ...values: T[]): T[];

	export function equals(...arrays: unknown[]): boolean;

	export function equalsDeep(...arrays: unknown[]): boolean;

	export function every<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): boolean;

	export function filter<T>(
		array: T[],
		filterer?: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): T[];

	export function find<T>(
		array: T[],
		value?: T,
		from?: number,
	): number | undefined;

	export function findLast<T>(
		array: T[],
		value?: T,
		from?: number,
	): number | undefined;

	export function findWhere<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
		from?: number,
	): number | undefined;

	export function findWhereLast<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
		from?: number,
	): number;

	export function flatten<T>(array: T[], depth?: number): T[];

	export function freezeDeep<T>(array: T[]): ReadonlyDeep<T[]>;

	export function includes<T>(array: T[], value: T, from?: number): boolean;

	export function insert<T>(array: T[], index: number, ...values: T[]): T[];

	export function last<T>(array: T[]): T;

	export function map<T extends object, U>(
		array: T,
		mapper: (value: T[keyof T], index: number, array: Readonly<T>) => U,
	): U[];

	export function pop<T>(array: T[], count?: number): T[];

	export function push<T>(array: T[], ...values: T[]): T[];

	export function reduce<T, U extends T>(
		array: T[],
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: Readonly<T[]>,
		) => U,
		initialValue?: U,
	): U;

	export function reduceRight<T, U extends T>(
		array: T[],
		reducer: (
			accumulator: U,
			value: T,
			index: number,
			array: Readonly<T[]>,
		) => U,
		initialValue?: U,
	): U;

	export function removeIndex<T>(array: T[], index: number): T[];

	export function removeIndices<T>(array: T[], ...indices: number[]): T[];

	export function removeValue<T>(array: T[], value: T): T[];

	export function removeValues<T>(array: T[], ...values: T[]): T[];

	export function reverse<T>(array: T[]): T[];

	export function set<T>(array: T[], index: number, value: T): T[];

	export function shift<T>(array: T[], count?: number): T[];

	export function shuffle<T>(array: T[]): T[];

	export function slice<T>(array: T[], from?: number, to?: number): T[];

	export function some<T>(
		array: T[],
		predicate: (value: T, index: number, array: Readonly<T[]>) => unknown,
	): boolean;

	export function sort<T>(
		array: T[],
		comparator?: (a: T, b: T) => unknown,
	): T[];

	export function splice<T>(
		array: T[],
		start?: number,
		end?: number,
		...values: T[]
	): T[];

	export function toSet<T>(array: T[]): Set<T>;

	export function unshift<T>(array: T[], ...values: T[]): T[];

	export function update<T>(
		array: T[],
		index: number,
		updater?: (value: T, index: number) => T,
		callback?: (index: number) => T,
	): T[];

	export function zip<T extends unknown[][]>(
		...arrays: T
	): {
		[K in keyof T]: T[K] extends (infer V)[] ? V : never;
	}[];

	export function zipAll<T extends unknown[][]>(
		...arrays: T
	): {
		[K in keyof T]: ReplaceType<
			T[K] extends (infer V)[] ? V : never,
			undefined,
			PhantomNone
		>;
	}[];
}
