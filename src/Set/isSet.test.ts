import { expect, it } from "@rbxts/jest-globals";
import isSet from "./isSet";

it("should return true for empty tables", () => {
	expect(isSet({})).toBe(true);
	expect(isSet([])).toBe(true);

	expect(isSet(new Map())).toBe(true);
	expect(isSet(new Set())).toBe(true);
});

it("should return false for array-like structures", () => {
	expect(isSet([1])).toBe(false);

	expect(
		isSet(
			setmetatable(
				{},
				{
					__len: () => 3,
				},
			),
		),
	).toBe(false);
});
