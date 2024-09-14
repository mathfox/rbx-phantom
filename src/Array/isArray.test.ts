import { expect, it } from "@rbxts/jest-globals";
import isArray from "./isArray";

it("should detect empty array", () => {
	expect(isArray({})).toBe(true);
	expect(isArray(new Array())).toBe(true);
});

it("should return whether the given object is an array", () => {
	expect(isArray([1, 2, 3])).toBe(true);
	expect(isArray({ hello: "world" })).toBe(false);
	expect(isArray({ 1: 1, 2: 2, hello: "world" })).toBe(false);
});

it("should not allow sparsed arrays", () => {
	expect(isArray([1, 2, 3, undefined, 5])).toBe(false);
});

it("should work for proxies around arrays", () => {
	const originalValue = [1, 2, 3, 4, 5];

	function _next(ctx: Record<any, any>, last: unknown) {
		const target = rawget(ctx, "_base") as object;

		const key = next(target, last)[0] as string | undefined;

		if (key === undefined) return undefined;

		return $tuple(key, ctx[key]);
	}

	const proxy = setmetatable(
		{
			_base: table.clone(originalValue),
		},
		{
			__iter: (ctx: unknown) => {
				return $tuple(_next, ctx);
			},

			__len: (ctx: unknown) => {
				return (rawget(ctx, "_base") as ArrayLike<unknown>).size();
			},
		} as LuaMetatable<object>,
	);

	expect(isArray(proxy)).toBe(true);
});
