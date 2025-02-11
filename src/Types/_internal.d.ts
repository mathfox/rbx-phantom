// source: https://github.com/KamilHs/type-samurai/blob/79490c1d7eb919761b6d70683f67f0588614841b/src/_internal.d.ts

import { And, AndArr } from "./and";
import { IsEqual } from "./equal";
import { Extends } from "./extends";
import { IsNever } from "./never";
import { Not } from "./not";
import { Or } from "./or";
import { Prettify } from "./prettify";
import { IsUnknown } from "./unknown";

export type OverWritable = {
	overwriteDefault?: boolean;
};

export type ApplyDefaultOptions<
	BaseOptions,
	Options extends BaseOptions,
	DefaultOptions extends BaseOptions,
	OverwriteRules,
	OverwriteDefault extends boolean = false,
> = Prettify<{
	[K in keyof BaseOptions]-?: K extends keyof Options
		? AndArr<
				[Extends<NonNullable<BaseOptions[K]>, object>, Not<IsNever<DefaultOptions[K]>>, Not<IsUnknown<BaseOptions[K]>>]
			> extends true
			? ApplyDefaultOptions<
					NonNullable<BaseOptions[K]>,
					// roblox-ts diff, wrapping 2 types in NonNullable
					NonNullable<Options[K]>,
					NonNullable<DefaultOptions[K]>,
					OverwriteRules[K & keyof OverwriteRules],
					OverwriteDefault
				> & {
					tra: "test";
				}
			: Or<
						IsEqual<OverwriteDefault, true>,
						And<Extends<K, keyof OverwriteRules>, Extends<OverwriteRules[K & keyof OverwriteRules], true>>
					> extends true
				? Options[K]
				: Options[K] | DefaultOptions[K]
		: DefaultOptions[K];
}>;
