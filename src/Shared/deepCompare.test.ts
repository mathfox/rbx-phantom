import { describe, expect, it } from "@rbxts/jest-globals";
import { deepCompare } from "./deepCompare";

describe("deepCompare", () => {
	it("should work for primitives", () => {
		expect(deepCompare(1, 1)).toBe(true);

		expect(deepCompare("value", "value")).toBe(true);
	});

	it("should work for shallow structures", () => {
		expect(deepCompare({}, {})).toBe(true);
		expect(deepCompare([], [])).toBe(true);

		expect(deepCompare(new Map(), new Map())).toBe(true);
	});

	it("should work for nested structures", () => {
		expect(
			deepCompare(
				{
					nested_1: {
						nested_2: "test",
					},
				},
				{
					nested_1: {
						nested_2: "test",
					},
				},
			),
		).toBe(true);
	});
});
