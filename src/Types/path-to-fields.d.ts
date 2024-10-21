// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/path-to-fields.d.ts

import { ApplyDefaultOptions, OverWritable } from "./_internal";
import { And } from "./and";
import { ArrayElementType } from "./array-element-types";
import { IsEqual } from "./equal";
import { Increment } from "./increment";
import { IsArrayIndex } from "./is-array-index";
import { IsTuple } from "./is-tuple";
import { Join } from "./join";
import { IsNever } from "./never";
import type { PropertyKey } from "./property-key";
import { ValueOf, ValueOfArray } from "./value-of";

export type PathToFieldsOptions = OverWritable & {
	ignoredTypes?: unknown;
	stopTypes?: unknown;
	limit?: number;
	format?: "dot" | "array";
	ignoredKeys?: PropertyKey;
	arrayIndexing?: {
		exactIndexes: boolean;
	};
};

export type DefaultPathToFieldsOptions = {
	ignoredTypes: never;
	stopTypes: string | number | boolean | symbol | Callback;
	format: "dot";
	limit: 10;
	ignoredKeys: never;
	arrayIndexing: {
		exactIndexes: false;
	};
};

type OverwriteRules = {
	limit: true;
	format: true;
	arrayIndexing: {
		exactIndexes: true;
	};
};

type _PathToFieldsArray<
	T extends readonly [] | readonly [unknown, ...unknown[]],
	// roblox-ts diff, wrapping in Required
	Options extends Required<PathToFieldsOptions>,
	Iteration extends number = 0,
> = And<IsTuple<T>, IsEqual<Options["arrayIndexing"]["exactIndexes"], true>> extends true
	? ValueOfArray<{
			[K in keyof T]: IsArrayIndex<K> extends true ? [K, ..._PathToFields<T[K], Options, Increment<Iteration>>] : never;
		}>
	: ArrayElementType<T> extends infer ElementType
		? [
				`${number}`,
				...(ElementType extends ElementType ? _PathToFields<ElementType, Options, Increment<Iteration>> : never),
			]
		: never;

type _PathToFields<
	T,
	// roblox-ts diff, Required wrapper
	Options extends Required<PathToFieldsOptions>,
	Iteration extends number = 0,
> = T extends Options["ignoredTypes"]
	? never
	: T extends Options["stopTypes"]
		? []
		: IsEqual<Iteration, Options["limit"]> extends true
			? never
			: T extends readonly [] | readonly [unknown, ...unknown[]]
				? _PathToFieldsArray<T, Options, Iteration>
				: ValueOf<{
						[K in Exclude<keyof T, symbol | Options["ignoredKeys"]>]: NonNullable<T[K]> extends infer NonNullableFields
							? NonNullableFields extends readonly [] | readonly [unknown, ...unknown[]]
								? [K, ..._PathToFieldsArray<NonNullableFields, Options, Iteration>]
								: [K, ..._PathToFields<NonNullableFields, Options, Increment<Iteration>>]
							: never;
					}>;

/**
 * Get all possible paths to fields in an object
 * @example
 * ```ts
 * // "a" | "b" | "d"
 * type T0 = PathToFields<{a: string, b: number, d: boolean}>;
 * // ["arr.0.a", "arr.0.b", "arr.1.c"]
 * type T1 = PathToFields<{arr: [{a: string; b: number}, {c: boolean}]}, {
 *  arrayIndexing: {
 *   exactIndexes: true;
 *  }
 * }>;
 * ```
 */
export type PathToFields<T, Options extends PathToFieldsOptions & { overwriteDefault?: boolean } = never> = (
	IsNever<Options> extends true
		? DefaultPathToFieldsOptions
		: ApplyDefaultOptions<
				Omit<PathToFieldsOptions, keyof OverWritable>,
				Options,
				DefaultPathToFieldsOptions,
				OverwriteRules,
				Required<PathToFieldsOptions>["overwriteDefault"]
			>
) extends infer MergedOptions extends Required<PathToFieldsOptions>
	? _PathToFields<T, MergedOptions> extends infer Paths extends
			| readonly []
			| readonly [string | number, ...(string | number)[]]
		? IsEqual<MergedOptions["format"], "dot"> extends true
			? Paths extends Paths
				? Join<Paths, ".">
				: never
			: Paths
		: never
	: never;
