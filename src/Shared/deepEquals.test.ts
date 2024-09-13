import { expect, it } from "@rbxts/jest-globals";
import deepEquals from "./deepEquals";

it("should work for primitives", () => {
	expect(deepEquals(1, 1, 1, 1, 1)).toBe(true);

	expect(deepEquals("test", "test", "test")).toBe(true);
});

it("should work for shallow structures", () => {
	expect(deepEquals({}, {}, {})).toBe(true);
});

it("should work for nested structures", () => {
	expect(
		deepEquals(
			{
				value_1: {
					value_2: "test",
				},
			},
			{
				value_1: {
					value_2: "test",
				},
			},
			{
				value_1: {
					value_2: "test",
				},
			},
		),
	).toBe(true);
});
