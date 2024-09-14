import { describe, expect, it } from "@rbxts/jest-globals";
import { compare } from "./compare";

describe("compare", () => {
	it("should compare primitive values", () => {
		expect(compare(1, 1)).toBe(true);

		expect(compare("value", "value")).toBe(true);

		const value = {};

		expect(compare(value, value)).toBe(true);
	});

	it("should work for shallow table structures", () => {
		expect(compare([1, 2, 3], [1, 2, 3])).toBe(true);

		expect(
			compare(
				{
					value: 3,
				},
				{
					value: 3,
				},
			),
		).toBe(true);

		expect(compare(new Map([["value", 3]]), new Map([["value", 3]]))).toBe(true);

		expect(compare(new Set([3]), new Set([3]))).toBe(true);
	});

	it("should return true when comparing empty array", () => {
		expect(compare({}, {})).toBe(true);
		expect(compare(new Array(), new Array())).toBe(true);

		expect(compare(new Map(), new Map())).toBe(true);

		expect(compare(new Set(), new Set())).toBe(true);
	});

	it("should fail on non-primitive values", () => {
		expect(compare([1, 2, {}], [1, 2, {}])).toBe(false);

		expect(
			compare(
				{
					value: {},
				},
				{
					value: {},
				},
			),
		).toBe(false);

		expect(compare(new Map([["value", {}]]), new Map([["value", {}]]))).toBe(false);

		expect(compare(new Set([{}]), new Set([{}]))).toBe(false);
	});
});
